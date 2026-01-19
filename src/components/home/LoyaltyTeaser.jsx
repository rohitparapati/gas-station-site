/**
 * LoyaltyTeaser.jsx
 * - Teases the loyalty program section
 * - Later: we can add a signup form or app store links
 */
import { Link } from "react-router-dom";

export default function LoyaltyTeaser() {
  return (
    <section className="section home-loyalty" aria-label="Loyalty program">
      <div className="container">
        <div className="card home-loyalty__card">
          <div className="stack">
            <h2>Join Our Loyalty Program</h2>
            <p className="lead">
              Earn points on every visit and unlock member-only discounts.
            </p>
            <div className="home-loyalty__actions">
              <Link className="btn btn--primary" to="/contact">
                Ask About Loyalty
              </Link>
              <Link className="btn btn--ghost" to="/deals-offers">
                See Member Deals
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
