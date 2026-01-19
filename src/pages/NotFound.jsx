/**
 * NotFound.jsx
 * - Simple 404 page
 */
import { Link } from "react-router-dom";
import { setPageTitle } from "../utils/seo.js";

export default function NotFound() {
  setPageTitle("Not Found");

  return (
    <section className="container page">
      <h1>404</h1>
      <p>That page doesn’t exist.</p>
      <Link className="link" to="/">Go back home</Link>
    </section>
  );
}
