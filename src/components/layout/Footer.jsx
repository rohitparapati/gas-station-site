/**
 * Footer.jsx
 * - Shared footer shown on all pages
 * - Keep it simple for now; we’ll expand later (links, socials, etc.)
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer__inner">
        <p className="footer__text">
          © {year} Your Gas Station. All rights reserved.
        </p>
        <p className="footer__text">
          Built with React + Vite (portfolio project).
        </p>
      </div>
    </footer>
  );
}
