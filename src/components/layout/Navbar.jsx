/**
 * Navbar.jsx
 * - Sticky site navigation (shared across all pages)
 * - Uses NavLink for active route styling
 * - Includes basic mobile nav behavior (simple + accessible)
 */
import { useState } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Fuel Prices", to: "/fuel-prices" },
  { label: "Store / Services", to: "/store-services" },
  { label: "Deals / Offers", to: "/deals-offers" },
  { label: "Location & Hours", to: "/location-hours" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Primary">
        <div className="navbar__inner">
          <NavLink to="/" className="navbar__brand" onClick={closeMenu}>
            <span className="navbar__logo" aria-hidden="true">⛽</span>
            <span className="navbar__brandText">Your Gas Station</span>
          </NavLink>

          <button
            className="navbar__toggle"
            type="button"
            aria-expanded={isOpen}
            aria-controls="primary-nav"
            onClick={() => setIsOpen((v) => !v)}
          >
            <span className="sr-only">Toggle navigation menu</span>
            <span aria-hidden="true">{isOpen ? "✕" : "☰"}</span>
          </button>

          <div
            id="primary-nav"
            className={`navbar__links ${isOpen ? "is-open" : ""}`}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive ? "navlink is-active" : "navlink"
                }
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            ))}

            <NavLink
              to="/careers"
              className={({ isActive }) =>
                isActive ? "navlink navlink--cta is-active" : "navlink navlink--cta"
              }
              onClick={closeMenu}
            >
              Careers
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}
