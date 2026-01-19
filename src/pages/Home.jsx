/**
 * Home.jsx
 * - Home page placeholder
 * - Later we will add: Hero, quick info strip, services, deals teaser, loyalty, FAQ, etc.
 */
import { setPageTitle } from "../utils/seo.js";

export default function Home() {
  setPageTitle("Home");

  return (
    <section className="container page">
      <h1>Home</h1>
      <p>Placeholder: Hero + Fuel board + Services + Deals + Loyalty + FAQ will go here.</p>
    </section>
  );
}
