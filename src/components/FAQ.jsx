// Visible FAQ that backs the FAQPage JSON-LD in index.html.
// The question/answer text here is kept in sync with that structured data so
// Google (and AI assistants) see matching on-page content, not orphaned schema.
const faqs = [
  {
    q: 'Where can I find Disney events near Rochester, MN in 2026?',
    a: "You've got a great year ahead close to home. In 2026, Rochester families can catch Disney on Ice: Road Trip Adventures at Target Center (Feb 27–Mar 1), Disney in Concert: The Sound of Magic at Orchestra Hall (Apr 17–18), and the Disney Worlds Collide Concert Tour at Target Center (Oct 18). Every venue is about 75 minutes north of Rochester, an easy day trip up Hwy 52.",
  },
  {
    q: 'Is there a free Disney vacation planner in Rochester, MN?',
    a: "Yes. Minnesota to Main Street is a free Disney vacation planning service right here in Rochester, MN. I'm Misty, an Authorized Disney Vacation Planner credentialed by the Walt Disney Travel Company. My planning costs you nothing. Disney compensates me directly, so you get a local expert in your corner at zero cost.",
  },
  {
    q: 'What does an Authorized Disney Vacation Planner actually do?',
    a: "I build personalized itineraries, lock in the dining reservations that book out 60 days ahead, recommend hotels that fit your budget, and hand you the park strategies that save real time and money across Walt Disney World, Disneyland, and Disney Cruise Line. All of it is free to your family.",
  },
  {
    q: 'How far is Minneapolis from Rochester, MN for Disney events?',
    a: "About 75 to 85 minutes north via Highway 52. That puts Target Center and Orchestra Hall well within day-trip range for Rochester-area families, so catching a Disney on Ice show or a Disney in Concert night doesn't mean an overnight stay.",
  },
]

export default function FAQ() {
  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="section-head text-center fade-in">
          <div className="section-label" style={{ justifyContent: 'center' }}>Common Questions</div>
          <h2 style={{ color: 'var(--navy)' }}>Disney Planning Questions, Answered</h2>
        </div>

        <div className="faq-list fade-in">
          {faqs.map((item, i) => (
            <details className="faq-item" key={i} open={i === 0}>
              <summary className="faq-question">{item.q}</summary>
              <p className="faq-answer">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
