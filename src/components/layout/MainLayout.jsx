/**
 * MainLayout.jsx
 * - Shared layout for all pages (Navbar + main content + Footer)
 * - Outlet renders the matched route page component
 */
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export default function MainLayout() {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      <Navbar />

      <main id="main" className="main-content" tabIndex={-1}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
