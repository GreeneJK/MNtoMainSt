export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }
  const { email, firstName } = req.body
  if (!email) return res.status(400).json({ error: 'Email is required' })

  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        email,
        attributes: firstName ? { FIRSTNAME: firstName } : undefined,
        listIds: [3],
        updateEnabled: true, // adds existing contacts to the list instead of erroring
      }),
    })

    // Brevo returns 201 (created) or 204 (updated) on success.
    if (!response.ok) {
      const data = await response.json().catch(() => ({}))
      return res.status(response.status).json({ error: data.message || 'Subscription failed' })
    }
    return res.status(200).json({ success: true })
  } catch (err) {
    return res.status(500).json({ error: 'Internal server error' })
  }
}
