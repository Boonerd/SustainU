// src/pages/Home.jsx
import Hero from "../components/Hero";
import SustainableStats from "../components/SustainableStats";
import VoicesGallery from "../components/VoicesGallery";
import WorryHopeArc from "../components/WorryHopeArc";
import Footer from "../components/Footer";

export default function Home({ goToPage }) {
  return (
    <div className="min-h-screen bg-cream dark:bg-darkbg">
      <Hero goToPage={goToPage} />
      <VoicesGallery goToPage={goToPage} />
      <SustainableStats />
      <WorryHopeArc />
      <Footer />
    </div>
  );
}