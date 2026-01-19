/**
 * FaqPreview.jsx
 * - Simple FAQ preview using <details>/<summary> (accessible by default)
 * - Later: we can move FAQ data into /data/faq.js and map it
 */
export default function FaqPreview() {
  return (
    <section className="section home-faq" aria-label="Frequently asked questions">
      <div className="container stack">
        <header className="home-sectionHeader">
          <h2>FAQ</h2>
          <p className="lead">Quick answers to common questions.</p>
        </header>

        <div className="home-faq__grid">
          <details className="home-faq__item">
            <summary>Do you have a car wash?</summary>
            <p>Yes (example). We’ll list wash options and pricing on the Services page.</p>
          </details>

          <details className="home-faq__item">
            <summary>Are fuel prices updated in real-time?</summary>
            <p>For now they’re local demo data. Later we can connect a backend or API if needed.</p>
          </details>

          <details className="home-faq__item">
            <summary>Do you offer loyalty rewards?</summary>
            <p>Yes (example). We’ll add program details and how to enroll.</p>
          </details>
        </div>
      </div>
    </section>
  );
}
