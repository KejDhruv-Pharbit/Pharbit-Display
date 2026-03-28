import "../Styles/Components/traceability.css"

const TraceabilityLayer = () => {
  return (
    <section className="trace-section">
      <div className="trace-container">
        
        {/* Left Column: Heading and First Paragraph */}
        <div className="trace-content-left">
          <h2 className="trace-title">
            One Traceability <br /> Layer. Every <br /> Batch.
          </h2>
          <p className="trace-description">
            Track medicine batches on your preferred blockchain and start 
            verifying provenance instantly through secure, automated 
            smart contracts. Enjoy seamless cross-chain access, optimized 
            transparency, real-time tracking, and full control of your supply chain with 
            no intermediaries, just transparent, efficient 
            decentralized tracking working for you.
          </p>
        </div>

        {/* Right Column: Glowing 3D Wireframe */}
        <div className="trace-visual-right">
          <div className="trace-glow-backdrop"></div>
          {/* Custom Inline SVG matching the geometric wireframe aesthetic */}
          <svg className="trace-wireframe" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Outer Hexagon */}
            <path d="M100 20L170 60L170 140L100 180L30 140L30 60L100 20Z" stroke="#ff4d29" strokeWidth="3" strokeLinejoin="round"/>
            {/* Inner Isometric Lines */}
            <path d="M100 20L100 100L170 140" stroke="#ff4d29" strokeWidth="3" strokeLinejoin="round"/>
            <path d="M100 100L30 140" stroke="#ff4d29" strokeWidth="3" strokeLinejoin="round"/>
            <path d="M30 60L100 100L170 60" stroke="#ff4d29" strokeWidth="3" strokeLinejoin="round"/>
            {/* Connecting Nodes (Dots) */}
            <circle cx="100" cy="20" r="4" fill="#ff4d29"/>
            <circle cx="170" cy="60" r="4" fill="#ff4d29"/>
            <circle cx="170" cy="140" r="4" fill="#ff4d29"/>
            <circle cx="100" cy="180" r="4" fill="#ff4d29"/>
            <circle cx="30" cy="140" r="4" fill="#ff4d29"/>
            <circle cx="30" cy="60" r="4" fill="#ff4d29"/>
            <circle cx="100" cy="100" r="4" fill="#ff4d29"/>
          </svg>
        </div>
      </div>

      {/* Bottom Full-Width Paragraph */}
      <div className="trace-bottom-content">
        <p className="trace-sub-description">
          Our protocol intelligently routes supply chain data across multiple 
          blockchains using secure, trust-minimized cross-chain 
          communication. It ensures seamless batch transfers, optimized 
          data efficiency, reduced fragmentation, and consistent 
          execution—allowing distributors and pharmacies to access 
          deep traceability across ecosystems without friction.
        </p>
      </div>
      
      {/* Decorative subtle line matching the design */}
      <div className="trace-divider"></div>
    </section>
  );
};

export default TraceabilityLayer;