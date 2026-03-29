import { LineChart, DollarSign, Share2, ShieldCheck, Zap, Database, Globe, Lock, Truck, Building2, Store } from 'lucide-react';
import "../Styles/Components/BentoFeatures.css"
import { useEffect } from 'react';
 
const BentoFeatures = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".bento-card, .bento-main-title");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("bento-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bento-section">
      {/* Added bento-animate-up */}
      <h2 className="bento-main-title bento-animate-up">
        Designed for <br /> pharma supply chain
      </h2>
 
      <div className="bento-grid">
 
        {/* Card 1 — Wide Left Top (Added bento-animate-left) */}
        <div className="bento-card bento-card--wide bento-animate-left">
          <div className="bento-content">
            <h3 className="bento-title">Seamless Shipping</h3>
            <p className="bento-desc">
              Track medicine flow from manufacturer to distributor to retailer
              with real-time visibility and verified handoffs across the supply chain.
            </p>
          </div>
          <div className="bento-visual bento-visual--center">
            <div className="bento-shipping-flow">
              <div className="bento-ship-node">
                <Building2 size={50} color="#00d4ff" />
              </div>
              <div className="bento-ship-arrow"><span className="bento-dot-line"></span></div>
              <div className="bento-ship-node">
                <Truck size={40} color="#ff4d29" />
              </div>
              <div className="bento-ship-arrow"><span className="bento-dot-line"></span></div>
              <div className="bento-ship-node">
                <Building2 size={45} color="#00d4ff" />
              </div>
              <div className="bento-ship-arrow"><span className="bento-dot-line"></span></div>
              <div className="bento-ship-node">
                <Truck size={40} color="#ff4d29" />
              </div>
              <div className="bento-ship-arrow"><span className="bento-dot-line"></span></div>
              <div className="bento-ship-node">
                <Store size={50} color="#00d4ff" />
              </div>
            </div>
            <div className="bento-glow bento-glow--subtle"></div>
          </div>
        </div>
 
        {/* Card 2 — Square Right Top (Added bento-animate-right) */}
        <div className="bento-card bento-card--square bento-animate-right">
          <div className="bento-content">
            <h3 className="bento-title">On-Chain Traceability</h3>
            <p className="bento-desc">
              Log medicine batches on your preferred blockchain and verify
              provenance instantly through secure, automated smart contracts.
            </p>
          </div>
          <div className="bento-visual bento-visual--center">
            <div className="bento-orbital-ring bento-orbital-ring--outer">
              <div className="bento-orbital-ring bento-orbital-ring--inner">
                <div className="bento-orbital-core">
                  <LineChart color="#00d4ff" size={28} strokeWidth={1.5} style={{ transform: 'none' }} />
                </div>
              </div>
            </div>
            <div className="bento-glow bento-glow--center"></div>
          </div>
        </div>
 
        {/* Card 3 — Square Left Bottom (Added bento-animate-left) */}
        <div className="bento-card bento-card--square bento-animate-left">
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
 
        {/* Card 4 — Wide Right Bottom (Added bento-animate-right) */}
      {/* Card 4 — Wide Right Bottom (Anti-Counterfeit Part) */}
<div className="bento-card bento-card--wide bento-animate-right">
  <div className="bento-content">
    <h3 className="bento-title">Anti-Counterfeit Protocol</h3>
    <p className="bento-desc">
      Eliminate illicit trade with unique cryptographic identifiers for every 
      unit. Instantly verify batch authenticity and detect anomalies 
      using decentralized attestation before products reach the patient.
    </p>
  </div>
  
  {/* The icon grid now represents a "Verification Matrix" */}
  <div className="bento-icon-grid">
  <div className="bento-icon-cell"><ShieldCheck size={30} /></div>
  <div className="bento-icon-cell"><Lock size={30} /></div>
  <div className="bento-icon-cell"><Database size={30} /></div>
  <div className="bento-icon-cell"><Globe size={30} /></div>
  <div className="bento-icon-cell"><Zap size={30} /></div>

  <div className="bento-icon-cell"><Truck size={30} /></div>
  <div className="bento-icon-cell"><Building2 size={30} /></div>

  {/* Active verification node */}
  <div className="bento-icon-cell ">
    <ShieldCheck size={35} strokeWidth={2.5} />
  </div>

  <div className="bento-icon-cell"><Store size={30} /></div>
  <div className="bento-icon-cell"><Lock size={30} /></div>
</div>
</div>
 
      </div>
    </section>
  );
};
 
export default BentoFeatures;