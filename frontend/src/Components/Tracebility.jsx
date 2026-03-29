import "../Styles/Components/Tracebility.css"
import { useEffect } from "react";
import { useRef } from "react";
const TraceLayer = () => {
  const cubeRef = useRef(null);

useEffect(() => {
  // --- Existing Intersection Observer ---
  const elements = document.querySelectorAll(
    ".trace-col-left, .trace-col-right, .trace-row-bottom"
  );
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("trace-visible");
      });
    },
    { threshold: 0.2 }
  );
  elements.forEach((el) => observer.observe(el));

  // --- New Dynamic Glow Logic ---
  const handleScroll = () => {
    if (!cubeRef.current) return;

    const rect = cubeRef.current.getBoundingClientRect();
    const viewportCenter = window.innerHeight / 2;
    const elementCenter = rect.top + rect.height / 2;

    // Calculate distance from center (0 = perfect center)
    const distance = Math.abs(viewportCenter - elementCenter);
    
    // Normalize: 1 at center, 0 when 600px away
    const intensity = Math.max(0, 1 - distance / 600);

    // Apply value to CSS Variable
    cubeRef.current.style.setProperty('--glow-opacity', intensity);
  };

  window.addEventListener("scroll", handleScroll);
  return () => {
    observer.disconnect();
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
  return (
    <section className="trace-section">
      <div className="trace-container">

        {/* Top Content Row */}
        <div className="trace-row-top">
          <div className="trace-col-left">
            <h2 className="trace-heading">
              One Traceability <br /> Layer. Every <br /> Medicine Batch.
            </h2>
            <p className="trace-para">
              Log medicine batches on a decentralized ledger and verify 
              provenance instantly through immutable, trustless smart 
              contracts. Gain seamless on-chain visibility, real-time 
              tracking, and complete control over your supply chain — 
              without intermediaries, without compromise.
            </p>
          </div>

          <div className="trace-col-right" ref={cubeRef}>
            <div className="trace-icon-wrapper">
              {/* Background radial glow */}
              <div className="trace-icon-glow"></div>

              {/* Geometric SVG Cube Icon */}
              <svg className="trace-svg-cube" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Main Wireframe Structure */}
                <path d="M100 20L170 60V140L100 180L30 140V60L100 20Z" stroke="#ff4d29" strokeWidth="2"/>
                <path d="M100 20V100L170 140" stroke="#ff4d29" strokeWidth="2"/>
                <path d="M100 100L30 140" stroke="#ff4d29" strokeWidth="2"/>
                <path d="M30 60L100 100L170 60" stroke="#ff4d29" strokeWidth="2"/>
                {/* Secondary Cross Lines for Depth */}
                <path d="M65 40L65 120" stroke="#ff4d29" strokeWidth="1" opacity="0.5"/>
                <path d="M135 40L135 120" stroke="#ff4d29" strokeWidth="1" opacity="0.5"/>
                <path d="M100 180V100" stroke="#ff4d29" strokeWidth="1" opacity="0.5"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Description Row */}
        <div className="trace-row-bottom">
          <div className="trace-col-empty"></div>
          <div className="trace-col-text">
            <p className="trace-para-small">
              Our protocol leverages decentralized consensus and cryptographic 
              attestation to ensure every record across the supply chain is 
              tamper-proof and permanently auditable. From the first 
              on-chain registration to the final settlement, every state 
              transition is enforced by autonomous smart contract logic — 
              eliminating single points of failure, reducing trust 
              assumptions, and delivering end-to-end transparency across 
              every node in the network.
            </p>
          </div>
        </div>

        {/* Decorative Grid Line */}
        <div className="trace-divider-line"></div>

      </div>
    </section>
  );
};

export default TraceLayer;