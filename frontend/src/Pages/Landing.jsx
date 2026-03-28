import Navbar from '../Components/Navbar';
import MapBackground from '../Components/MapBackground';
import "../Styles/Pages/Hero.css"
import TraceLayer from '../Components/Tracebility';
import { useEffect } from "react";
import BentoFeatures from '../Components/BentoFeatures';

const Landing = () => {

useEffect(() => {
  const elements = document.querySelectorAll(
    ".ph-hero-badge, .ph-hero-main-title, .ph-hero-description, .ph-hero-actions"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("ph-visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));

  // optional: map glow trigger
  const map = document.querySelector(".map-svg-layer");
  if (map) map.classList.add("map-visible");

  return () => observer.disconnect();
}, []);
  return (
    <section className="ph-hero-container">
      {/* 1. The Dotted Map & Glows (Behind everything) */}
      <MapBackground />

      {/* 2. The Navigation Bar (Top) */}
      <Navbar />

      {/* 3. The Main Content Layer */}
      <div className="ph-hero-layer">
        <div className="ph-hero-badge">
          <span className="ph-badge-dot"></span>
          Lend & Borrow Across Blockchains. Instantly.
        </div>

        <h1 className="ph-hero-main-title">
          Cross-chain Supply <br /> 
          Protocol Bridging the Worlds <br /> 
          of Pharma and Blockchain
        </h1>

        <p className="ph-hero-description">
          A secure cross-chain supply protocol enabling seamless tracking and <br />
          verification of medicine batches across multiple blockchains—without intermediaries.
        </p>

        <div className="ph-hero-actions">
          <button className="ph-btn-launch">Launch App</button>
          <button className="ph-btn-docs">View Documentation</button>
        </div>
      </div>

      <TraceLayer />
      

      <BentoFeatures/>
    </section>
  );
};

export default Landing;