/**
 * App.jsx
 * - Defines the route table for the entire website
 * - Uses MainLayout so Navbar/Footer stay consistent across pages
 */
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout.jsx";

import Home from "./pages/Home.jsx";
import FuelPrices from "./pages/FuelPrices.jsx";
import StoreServices from "./pages/StoreServices.jsx";
import DealsOffers from "./pages/DealsOffers.jsx";
import LocationHours from "./pages/LocationHours.jsx";
import Contact from "./pages/Contact.jsx";
import Careers from "./pages/Careers.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      {/* Layout wrapper route */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/fuel-prices" element={<FuelPrices />} />
        <Route path="/store-services" element={<StoreServices />} />
        <Route path="/deals-offers" element={<DealsOffers />} />
        <Route path="/location-hours" element={<LocationHours />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />

        {/* Catch-all 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
