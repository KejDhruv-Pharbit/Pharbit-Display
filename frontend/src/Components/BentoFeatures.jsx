
import { LineChart, DollarSign, Share2, ShieldCheck, Zap, Database, Globe, Lock } from 'lucide-react';
import "../Styles/Components/BentoFeatures.css"

const BentoFeatures = () => {
  return (
    <section className="bento-section">
      <h2 className="bento-main-title">Designed for <br/> pharma supply chain</h2>
      
      <div className="bento-grid">
        
        {/* Card 1: Additional Income (Analytics) */}
        <div className="bento-card bento-wide">
          <div className="bento-content">
            <h3 className="bento-title">Additional Traceability</h3>
            <p className="bento-desc">Supply assets on your preferred blockchain and start earning yield instantly through secure, automated protocols.</p>
          </div>
          <div className="bento-visual bento-center">
            <div className="bento-orbital">
              <div className="bento-orbital-inner">
                <LineChart color="#ff4d29" size={32} />
              </div>
            </div>
            <div className="bento-glow-red"></div>
          </div>
        </div>

        {/* Card 2: Competitive Pricing */}
        <div className="bento-card bento-square">
          <div className="bento-content">
            <h3 className="bento-title">Competitive Pricing</h3>
            <p className="bento-desc">Optimize logistics costs with automated smart contracts and real-time market data.</p>
          </div>
          <div className="bento-visual">
            <div className="bento-price-label">
              <DollarSign size={20} />
              <span>VERIFIED_PRICING_UNIT</span>
            </div>
            <div className="bento-glow-red-subtle"></div>
          </div>
        </div>

        {/* Card 3: Innovation (The Grid of Icons) */}
        <div className="bento-card bento-square">
          <div className="bento-content">
            <h3 className="bento-title">Protocol Innovation</h3>
            <p className="bento-desc">Bridging disparate medical networks for seamless cross-border traceability.</p>
          </div>
          <div className="bento-icon-grid">
            <div className="bento-mini-box"><Database size={16} /></div>
            <div className="bento-mini-box"><Globe size={16} /></div>
            <div className="bento-mini-box active"><Share2 size={18} /></div>
            <div className="bento-mini-box"><Zap size={16} /></div>
            <div className="bento-mini-box"><Lock size={16} /></div>
          </div>
        </div>

        {/* Card 4: Enhance Security (The Shield) */}
        <div className="bento-card bento-wide">
          <div className="bento-content">
            <h3 className="bento-title">Enhance Security</h3>
            <p className="bento-desc">Tamper-proof encryption ensuring that medicine data remains immutable and verified at every handoff.</p>
          </div>
          <div className="bento-visual bento-center">
            <div className="bento-shield-wrapper">
               <ShieldCheck size={120} strokeWidth={1} color="#ff4d29" />
            </div>
            <div className="bento-glow-red-large"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BentoFeatures;