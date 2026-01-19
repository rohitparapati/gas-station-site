/**
 * DealsTeaser.jsx
 * - Teases current deals/promotions (preview section)
 * - Later: we can render actual deals from /data/deals.js with date filtering
 */
import { Link } from "react-router-dom";

export default function DealsTeaser() {
  return (
    <section className="section section--tight home-deals" aria-label="Deals teaser">
      <div className="container home-split">
        <div className="stack">
          <h2>Today’s Deals</h2>
          <p className="lead">
            Save on snacks, drinks, and quick combos — updated regularly.
          </p>
          <div className="home-deals__actions">
            <Link className="btn btn--primary" to="/deals-offers">
              View All Deals
            </Link>
          </div>
        </div>

        <div className="card home-deals__card">
          <p className="badge">Example Offers</p>
          <ul className="home-list">
            <li>Buy 1 Get 1 Coffee (6am–10am)</li>
            <li>Snack Combo: Chips + Soda $3.99</li>
            <li>Weekend Car Wash Discount</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
