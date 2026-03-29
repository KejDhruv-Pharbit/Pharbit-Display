import React from 'react';
import '../Styles/Components/footer.css';

const VirokaFooter = () => {
  return (
    <footer className="footer-viroka">
      
      <div className="footer-viroka-grid">

        {/* NEW COLUMN */}
        <div className="footer-viroka-section">
          <h4 className="footer-viroka-heading">// Product</h4>
          <ul className="footer-viroka-list">
            <li>Features</li>
            <li>API</li>
            <li>Integrations</li>
            <li>Dashboard</li>
            <li>Analytics</li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-viroka-section">
          <h4 className="footer-viroka-heading">// Resources</h4>
          <ul className="footer-viroka-list">
            <li>Our Blog</li>
            <li>Extensions</li>
            <li>Pricing</li>
            <li>Roadmap</li>
            <li>Newsletter</li>
          </ul>
        </div>

        {/* About */}
        <div className="footer-viroka-section">
          <h4 className="footer-viroka-heading">// About</h4>
          <ul className="footer-viroka-list">
            <li>About Us</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Partners</li>
            <li>Security</li>
          </ul>
        </div>

        {/* Enquiry */}
        <div className="footer-viroka-enquirey">
          <h4 className="footer-viroka-heading-small">// Enquiry</h4>
          <form className="footer-viroka-form">
            <input type="text" placeholder="Your Name" className="footer-viroka-input" />
            <input type="email" placeholder="Your Email" className="footer-viroka-input" />
            <textarea placeholder="Your Message" className="footer-viroka-textarea"></textarea>
            <button type="submit" className="footer-viroka-button">Submit</button>
          </form>
        </div>

      </div>

      <div className="footer-viroka-line"></div>

      <div className="footer-viroka-lower">
        <div className="footer-viroka-update">
          <p className="footer-viroka-update-heading">Stay updated</p>
          <p className="footer-viroka-update-text">
            Get product updates, blockchain insights, and pharma innovations directly in your inbox.
          </p>
        </div>

        <div className="footer-viroka-subscribe">
          <input type="email" placeholder="example@gmail.com" className="footer-viroka-input-subscribe" />
          <button className="footer-viroka-button-join">Join</button>
        </div>
      </div>

      <div className="footer-viroka-final">
        <p>©2026 Pharbit. All rights reserved.</p>
        <div className="footer-viroka-links">
          <span>Privacy</span>
          <span>Terms</span>
        </div>
      </div>

    </footer>
  );
};

export default VirokaFooter;