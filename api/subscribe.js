export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }
  const { email, firstName } = req.body
  if (!email) return res.status(400).json({ error: 'Email is required' })

  const apiKey = process.env.BEEHIIV_API_KEY
  console.log('BEEHIIV_API_KEY defined:', !!apiKey, 'length:', apiKey ? apiKey.length : 0)

  try {
    const response = await fetch(
      'https://api.beehiiv.com/v2/publications/pub_293bbd67-75cb-4f03-9f96-f972e0ee57cf/subscriptions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({ email, first_name: firstName || '', reactivate_existing: true, send_welcome_email: true }),
      }
    )
    const data = await response.json()
    console.log('Beehiiv response status:', response.status, 'body:', JSON.stringify(data))
    if (!response.ok) {
      return res.status(response.status).json({ beehiivError: data, keyDefined: !!apiKey })
    }
    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Fetch error:', err.message)
    return res.status(500).json({ error: 'Internal server error', detail: err.message })
  }
}