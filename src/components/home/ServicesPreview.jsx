/**
 * ServicesPreview.jsx
 * - Shows a preview of services/amenities using local data from /data/services.js
 * - Uses reusable .card styles from components.css
 */
import { services } from "../../data/services.js";

export default function ServicesPreview() {
  return (
    <section className="section home-services" aria-label="Services">
      <div className="container stack">
        <header className="home-sectionHeader">
          <h2>Services & Amenities</h2>
          <p className="lead">Convenient extras that make every stop easier.</p>
        </header>

        <div className="grid grid--2">
          {services.slice(0, 4).map((s) => (
            <article key={s.id} className="card home-services__card">
              <h3 className="card__title">{s.title}</h3>
              <p className="card__text">{s.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
