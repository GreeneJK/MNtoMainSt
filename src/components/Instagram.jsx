export default function Instagram() {
  return (
    <section className="instagram-section" id="instagram">
      <div className="container">
        <div className="ig-header text-center section-head fade-in">
          <div className="section-label" style={{ justifyContent: 'center' }}>Social</div>
          <h2 style={{ color: 'var(--navy)' }}>Follow the Magic on Instagram</h2>
          <div className="ig-handle">@mistymousemagic</div>
        </div>

        {/* Elfsight Instagram Feed | Untitled Instagram Feed */}
        <div className="ig-embed-wrap fade-in">
          <script src="https://elfsightcdn.com/platform.js" async></script>
          <div className="elfsight-app-8fe69861-16df-4fa2-9472-fa5b891f1d99" data-elfsight-app-lazy></div>
        </div>

        <div className="ig-footer fade-in">
          <a
            href="https://instagram.com/mistymousemagic"
            target="_blank"
            rel="noopener noreferrer"
            className="ig-follow-btn"
          >
            📸 Follow @mistymousemagic
          </a>
        </div>
      </div>
    </section>
  )
}
