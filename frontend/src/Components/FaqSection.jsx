import React, { useState, useEffect , useRef } from 'react';
import { Plus, Minus, Globe } from 'lucide-react';
import "../Styles/Components/FaqSection.css";
import Globe3D from "react-globe.gl";

const FaqSection = () => {

  const globeRef = useRef(); 

 useEffect(() => {
  if (globeRef.current) {
    const controls = globeRef.current.controls();

    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.6;

    // 🔥 FIX ZOOM ISSUE
    controls.enableZoom = false;
    controls.enablePan = false;

    // Lock distance (prevents zoom fluctuation)
    controls.minDistance = 300;
    controls.maxDistance = 300;
  }
}, []);
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "How is batch authenticity verified?",
      answer: "Every batch is assigned a unique cryptographic hash on-chain. Scanning the physical identifier triggers a smart contract call that validates the provenance against the immutable ledger."
    },
    {
      question: "Can I track temperature-sensitive shipments?",
      answer: "Yes, our protocol supports IoT integration to log real-time telemetry data (like temperature and humidity) directly onto the blockchain for end-to-end cold chain compliance."
    },
    {
      question: "Which blockchains are supported?",
      answer: "We support major enterprise networks including Ethereum L2s, Polygon, and private Hyperledger Besu instances through our cross-chain interoperability layer."
    },
    {
      question: "Is the data accessible to competitors?",
      answer: "No. We utilize Zero-Knowledge Proofs (ZKP) and granular permissioning to ensure that while the batch is 'verified,' sensitive commercial data remains private to authorized nodes."
    },
    {
      question: "How fast is the onboarding process?",
      answer: "Our API-first approach allows manufacturers to integrate existing ERP systems within days, enabling automated on-chain registration without manual data entry."
    }
  ];

  useEffect(() => {
    const elements = document.querySelectorAll(".faq-animate");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("faq-visible");
        });
      },
      { threshold: 0.1 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="faq-section">
      <div className="faq-container">
        
        {/* Left Side: Globe & Heading */}
        <div className="faq-left faq-animate">
          <h2 className="faq-main-title">
            Global Insights <br /> Across Every Node
          </h2>
        <div className="faq-globe-wrapper">
  <div className="faq-globe-glow"></div>

  <Globe3D
    ref={globeRef}
    className="faq-globe-canvas"

    backgroundColor="rgba(0,0,0,0)"
    width={550}
height={550}
    globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"

    arcsData={[
      { startLat: 28.6, startLng: 77.2, endLat: 40.7, endLng: -74 }, // India → USA
      { startLat: 28.6, startLng: 77.2, endLat: 51.5, endLng: 0 },   // India → UK
      { startLat: 28.6, startLng: 77.2, endLat: 35.6, endLng: 139.6 }, // India → Japan

      { startLat: 35.6, startLng: 139.6, endLat: 40.7, endLng: -74 }, // Japan → USA
      { startLat: 51.5, startLng: 0, endLat: -33.8, endLng: 151.2 },  // UK → Australia
      { startLat: 40.7, startLng: -74, endLat: -23.5, endLng: -46.6 }, // USA → Brazil

      { startLat: 19.0, startLng: 72.8, endLat: 1.3, endLng: 103.8 }, // Mumbai → Singapore
      { startLat: 1.3, startLng: 103.8, endLat: 31.2, endLng: 121.4 }, // Singapore → Shanghai
      { startLat: 31.2, startLng: 121.4, endLat: 55.8, endLng: 37.6 }, // China → Russia

      { startLat: 48.8, startLng: 2.3, endLat: 52.5, endLng: 13.4 }, // Paris → Berlin
      { startLat: 52.5, startLng: 13.4, endLat: 41.9, endLng: 12.5 }, // Berlin → Rome
      { startLat: 41.9, startLng: 12.5, endLat: 25.2, endLng: 55.3 }, // Rome → Dubai

      { startLat: 25.2, startLng: 55.3, endLat: 19.0, endLng: 72.8 }, // Dubai → Mumbai
      { startLat: -33.8, startLng: 151.2, endLat: -36.8, endLng: 174.7 }, // Australia → NZ
      { startLat: -23.5, startLng: -46.6, endLat: 4.7, endLng: -74.1 }, // Brazil → Colombia
    ]}
    arcColor={() => "#ff4d29"}
    arcDashLength={0.4}
    arcDashGap={0.2}
    arcDashAnimateTime={1800}

    pointsData={[
      { lat: 28.6, lng: 77.2 },
      { lat: 40.7, lng: -74 },
      { lat: 51.5, lng: 0 },
      { lat: 139.6, lng: 35.6 }
    ]}
    pointColor={() => "#ff4d29"}
    pointAltitude={0.02}
    pointRadius={0.5}
  />
</div>
        </div>

        {/* Right Side: Accordion */}
        <div className="faq-right faq-animate">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'faq-item--active' : ''}`}
              onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
            >
              <div className="faq-question-row">
                <span className="faq-question-text">{faq.question}</span>
                <div className="faq-toggle-icon">
                  {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </div>
              
              <div className={`faq-answer-wrapper ${activeIndex === index ? 'faq-answer--open' : ''}`}>
                <p className="faq-answer-text">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FaqSection;