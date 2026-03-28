import Navbar from '../Components/Navbar';
import MapBackground from '../Components/MapBackground';
import "../Styles/Pages/Hero.css"

const Landing = () => {
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
    </section>
  );
};

export default Landing;