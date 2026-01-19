/**
 * Home.jsx
 * - Main Home page assembly
 * - Composes smaller sections from /components/home/*
 * - Page title is set using our SEO helper
 */
import { setPageTitle } from "../utils/seo.js";

import Hero from "../components/home/Hero.jsx";
import QuickInfoStrip from "../components/home/QuickInfoStrip.jsx";
import ServicesPreview from "../components/home/ServicesPreview.jsx";
import DealsTeaser from "../components/home/DealsTeaser.jsx";
import LoyaltyTeaser from "../components/home/LoyaltyTeaser.jsx";
import FaqPreview from "../components/home/FaqPreview.jsx";

import "../styles/pages/home.css";

export default function Home() {
  setPageTitle("Home");

  return (
    <div className="home">
      <Hero />
      <QuickInfoStrip />
      <ServicesPreview />
      <DealsTeaser />
      <LoyaltyTeaser />
      <FaqPreview />
    </div>
  );
}
