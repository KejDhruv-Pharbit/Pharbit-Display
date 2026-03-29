import Navbar from '../Components/Navbar';
import MapBackground from '../Components/MapBackground';
import "../Styles/Pages/Hero.css"
import TraceLayer from '../Components/Tracebility';
import { useEffect, useRef } from "react";
import BentoFeatures from '../Components/BentoFeatures';
import FaqSection from '../Components/FaqSection';

const Landing = () => {
  const heroLayerRef = useRef(null);

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".ph-hero-badge, .ph-hero-main-title, .ph-hero-description, .ph-hero-actions"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("ph-visible");
        });
      },
      { threshold: 0.2 }
    );
    elements.forEach((el) => observer.observe(el));

    const map = document.querySelector(".map-svg-layer");
    if (map) map.classList.add("map-visible");

    return () => observer.disconnect();
  }, []);

  // Only blur the hero layer — no wrapper divs around your components
  useEffect(() => {
    const hero = heroLayerRef.current;
    if (!hero) return;

    const handleScroll = () => {
      const rect = hero.getBoundingClientRect();
      const scrolledPastRatio = -rect.top / rect.height;

      if (scrolledPastRatio > 0.60) {
        hero.classList.add("blurred-out");
      } else {
        hero.classList.remove("blurred-out");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="ph-hero-container">
      <MapBackground />
      <Navbar />

      {/* Only this div gets the blur — your own element, no component touched */}
      <div className="ph-hero-layer" ref={heroLayerRef}>
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

      {/* No wrappers — components render exactly as before */}
      <TraceLayer />
      <BentoFeatures />
      <FaqSection />
    </section>
  );
};

export default Landing;