import React from 'react';
import '../Styles/Components/footer.css';

const VirokaFooter = () => {
  return (
    <footer className="footer-viroka">
      <div className="footer-viroka-container">
        
        {/* Main Layout Wrapper */}
        <div className="footer-layout-wrapper">
          
          {/* LEFT SIDE: Links + Lower Footer */}
          <div className="footer-left-content">
            
            {/* Top Row: Link Columns */}
            <div className="footer-columns-grid">
              <div className="footer-viroka-section">
                <h4 className="footer-viroka-heading">// Protocol</h4>
                <ul className="footer-viroka-list">
                  <li>Launch App</li>
                  <li>Smart Contracts</li>
                  <li>Cross-Chain Bridge</li>
                  <li>Batch Registry</li>
                  <li>On-Chain Verification</li>
                </ul>
              </div>

              <div className="footer-viroka-section">
                <h4 className="footer-viroka-heading">// Developers</h4>
                <ul className="footer-viroka-list">
                  <li>Documentation</li>
                  <li>API Reference</li>
                  <li>SDK</li>
                  <li>GitHub</li>
                  <li>Changelog</li>
                </ul>
              </div>

              <div className="footer-viroka-section">
                <h4 className="footer-viroka-heading">// Regulations</h4>
                <ul className="footer-viroka-list">
                  <li>FDA Compliance</li>
                  <li>WHO Guidelines</li>
                  <li>GMP Standards</li>
                  <li>DSCSA Tracking</li>
                  <li>EU FMD Directive</li>
                </ul>
              </div>

              <div className="footer-viroka-section">
                <h4 className="footer-viroka-heading">// Company</h4>
                <ul className="footer-viroka-list">
                  <li>About Pharbit</li>
                  <li>Whitepaper</li>
                  <li>Blog</li>
                  <li>Careers</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>

            <div className="footer-viroka-line-internal"></div>

            {/* Bottom Row: Newsletter/Update (Now level with form) */}
            <div className="footer-viroka-lower-content">
              <div className="footer-viroka-update">
                <p className="footer-viroka-update-heading">Stay updated</p>
                <p className="footer-viroka-update-text">
                  Protocol updates and pharma supply insights directly in your inbox.
                </p>
                <div className="footer-viroka-subscribe">
                  <input type="email" placeholder="example@gmail.com" className="footer-viroka-input-subscribe" />
                  <button className="footer-viroka-button-join">Join</button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Independent Form Sidebar */}
          <div className="footer-viroka-enquiry-sidebar">
            <h4 className="footer-viroka-heading-small">// Enquiry</h4>
            <p className="footer-enquiry-sub">Have questions about on-chain compliance? Reach out to our team.</p>
            <form className="footer-viroka-form">
              <input type="text" placeholder="Your Name" className="footer-viroka-input" />
              <input type="email" placeholder="Your Email" className="footer-viroka-input" />
              <textarea placeholder="Your Message" className="footer-viroka-textarea"></textarea>
              <button type="submit" className="footer-viroka-button">Submit Message</button>
            </form>
          </div>

        </div>

        {/* Final Bottom Copyright */}
        <div className="footer-viroka-final">
          <p>©2026 Pharbit. All rights reserved.</p>
          <div className="footer-viroka-links">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default VirokaFooter;