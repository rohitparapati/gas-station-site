/**
 * Hero.jsx
 * - Home page top section (full-viewport hero)
 * - Contains headline + supporting text + CTA buttons
 * - Background image is handled via CSS for performance and easy swapping
 */
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="home-hero" aria-label="Welcome">
      <div className="home-hero__overlay" />
      <div className="container home-hero__content">
        <p className="badge home-hero__badge">Open Daily • Fast Service • Clean Store</p>

        <h1 className="home-hero__title">Your Gas Station</h1>

        <p className="home-hero__subtitle">
          Fuel up fast, grab essentials, and get back on the road — with transparent prices and friendly service.
        </p>

        <div className="home-hero__actions">
          <Link className="btn btn--primary" to="/fuel-prices">
            View Fuel Prices
          </Link>
          <Link className="btn" to="/location-hours">
            Get Directions
          </Link>
        </div>

        <p className="home-hero__note">
          Tip: This is a portfolio site — we’ll swap in your real station name, images, and info later.
        </p>
      </div>
    </section>
  );
}
