/**
 * QuickInfoStrip.jsx
 * - A compact strip showing key info at a glance:
 *   fuel highlight, open hours, address
 * - Uses semantic <dl> for label/value pairs (accessible)
 */
export default function QuickInfoStrip() {
  return (
    <section className="home-quick" aria-label="Quick info">
      <div className="container">
        <dl className="home-quick__grid">
          <div className="home-quick__item">
            <dt className="home-quick__label">Today’s Highlight</dt>
            <dd className="home-quick__value">
              Regular from <strong>$3.29</strong>
            </dd>
          </div>

          <div className="home-quick__item">
            <dt className="home-quick__label">Hours</dt>
            <dd className="home-quick__value">
              <strong>Open 24/7</strong> (example)
            </dd>
          </div>

          <div className="home-quick__item">
            <dt className="home-quick__label">Address</dt>
            <dd className="home-quick__value">
              1234 Main St, St. Louis, MO (example)
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
