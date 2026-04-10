export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content fade-in fade-in-delay-1">
            <div className="section-label">Meet Your Planner</div>
            <h2>Hi, I'm Misty &mdash; Rochester's Own Disney Vacation Planner</h2>

            <div className="authorized-badge">
              <span className="authorized-badge-icon">&#x1F3F0;</span>
              <div className="authorized-badge-text">
                <div className="line1">Officially Certified</div>
                <div className="line2">Authorized Disney Vacation Planner</div>
                <div className="line3">Walt Disney Travel Company</div>
              </div>
            </div>

            <p>
              As a Rochester, MN local &mdash; born and raised in the Med City &mdash; I've spent
              over two decades mastering every corner of Walt Disney World, Disneyland, and Disney
              Cruise Line. Whether you're a first-timer loading up the minivan on Hwy 52 or a
              seasoned Disney vet planning your next anniversary cruise, I'll handle every detail
              so you can focus on the magic.
            </p>
            <p>
              I know what it's like juggling Mayo Clinic schedules, Rochester Public Schools calendars,
              and trying to figure out the best week to fly out of RST or MSP. That's why I build
              custom itineraries around <strong>your</strong> family's real life &mdash; not a
              one-size-fits-all template from a national call center.
            </p>
            <p>
              And if you're not ready for a full Disney vacation yet, there's plenty of Disney magic
              closer to home. In 2026, Rochester families can catch Disney on Ice at Target Center,
              Disney in Concert at Orchestra Hall, and the Worlds Collide Tour &mdash; all within
              easy driving distance up Hwy 52.
            </p>
            <p>
              My planning services are <strong>completely free to you</strong>. As an Authorized
              Disney Vacation Planner, I'm compensated directly by the Walt Disney Travel Company.
              You get a local expert in your corner at zero cost.
            </p>

            <div className="credentials">
              <div className="credential-item">
                <span className="credential-icon">&#x1F3F0;</span>
                <div className="credential-text">
                  Authorized Disney Vacation Planner
                  <span>Official credential from Walt Disney Travel Company</span>
                </div>
              </div>
              <div className="credential-item">
                <span className="credential-icon">&#x1F4CD;</span>
                <div className="credential-text">
                  Serving Rochester, MN &amp; the Hwy 52 Corridor
                  <span>Local expert, personal service &mdash; not a call center</span>
                </div>
              </div>
              <div className="credential-item">
                <span className="credential-icon">&#x1F48C;</span>
                <div className="credential-text">
                  Monthly Disney Insider Newsletter
                  <span>Tips, park news, and money-saving strategies</span>
                </div>
              </div>
            </div>
          </div>

          {/* Planner Photo */}
          <div className="about-photo-side fade-in fade-in-delay-2">
            <img src="/MistyMickyFilm.png" alt="Misty with Chef Mickey at Walt Disney World" />
          </div>
        </div>
      </div>
    </section>
  )
}
