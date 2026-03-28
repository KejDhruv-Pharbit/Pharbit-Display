import { LineChart, DollarSign, Share2, ShieldCheck, Zap, Database, Globe, Lock } from 'lucide-react';
import "../Styles/Components/BentoFeatures.css"
 
const BentoFeatures = () => {
  return (
    <section className="bento-section">
      <h2 className="bento-main-title">Designed for <br /> pharma supply chain</h2>
 
      <div className="bento-grid">
 
        {/* Card 1 — Wide Left Top */}
        <div className="bento-card bento-card--wide">
          <div className="bento-content">
            <h3 className="bento-title">On-Chain Traceability</h3>
            <p className="bento-desc">
              Log medicine batches on your preferred blockchain and verify
              provenance instantly through secure, automated smart contracts.
              Enjoy seamless cross-chain access and optimized supply chain visibility.
            </p>
          </div>
          <div className="bento-visual bento-visual--center">
            <div className="bento-orbital-ring bento-orbital-ring--outer">
              <div className="bento-orbital-ring bento-orbital-ring--inner">
                <div className="bento-orbital-core">
                  <LineChart color="#00d4ff" size={28} strokeWidth={1.5} />
                </div>
              </div>
            </div>
            <div className="bento-glow bento-glow--center"></div>
          </div>
        </div>
 
        {/* Card 2 — Square Right Top */}
        <div className="bento-card bento-card--square">
          <div className="bento-content">
            <h3 className="bento-title">Competitive Pricing</h3>
            <p className="bento-desc">
              Optimize logistics costs through automated smart contracts
              and transparent, real-time on-chain market data.
            </p>
          </div>
          <div className="bento-visual bento-visual--center">
            <div className="bento-price-display">
              <span className="bento-price-text">$$$$$$</span>
            </div>
            <div className="bento-glow bento-glow--subtle"></div>
          </div>
        </div>
 
        {/* Card 3 — Square Left Bottom */}
        <div className="bento-card bento-card--square">
          <div className="bento-content">
            <h3 className="bento-title">Cross-chain Innovation</h3>
            <p className="bento-desc">
              Bridging disparate networks for seamless cross-border
              traceability through trust-minimized cross-chain communication.
            </p>
          </div>
          <div className="bento-icon-grid">
            <div className="bento-icon-cell"><Database size={15} /></div>
            <div className="bento-icon-cell"><Globe size={15} /></div>
            <div className="bento-icon-cell"><Lock size={15} /></div>
            <div className="bento-icon-cell"><Zap size={15} /></div>
            <div className="bento-icon-cell"><LineChart size={15} /></div>
            <div className="bento-icon-cell bento-icon-cell--active"><Share2 size={17} /></div>
            <div className="bento-icon-cell"><DollarSign size={15} /></div>
            <div className="bento-icon-cell"><Globe size={15} /></div>
            <div className="bento-icon-cell"><Lock size={15} /></div>
            <div className="bento-icon-cell"><Database size={15} /></div>
          </div>
        </div>
 
        {/* Card 4 — Wide Right Bottom */}
        <div className="bento-card bento-card--wide">
          <div className="bento-content">
            <h3 className="bento-title">Enhanced Security</h3>
            <p className="bento-desc">
              Cryptographic attestation and tamper-proof encryption ensure
              medicine data remains immutable and verified at every handoff
              across the supply chain.
            </p>
          </div>
          <div className="bento-visual bento-visual--center">
            <div className="bento-shield-wrapper">
              <ShieldCheck size={110} strokeWidth={1} color="#00d4ff" />
            </div>
            <div className="bento-glow bento-glow--large"></div>
          </div>
        </div>
 
      </div>
    </section>
  );
};
 
export default BentoFeatures;
 