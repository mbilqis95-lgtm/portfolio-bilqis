import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <h3>Portfolio</h3>
            <p>Mari berkolaborasi untuk menciptakan sesuatu yang luar biasa bersama!</p>
          </div>
          <div className="social-links">
            {/* LINKEDIN */}
            <a href="https://linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=malikal-bilqis-7487a3395" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            
            {/* GITHUB */}
            <a href="https://github.com/mbilqis95-lgtm" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            
            {/* INSTAGRAM */}
            <a href="https://www.instagram.com/who0kies?igsh=MTM2d2M5c2R4OHd1MA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            
            {/* TIKTOK (GANTI DARI TWITTER) */}
            <a href="https://www.tiktok.com/@myco0kies?_r=1&_t=ZS-917jqVVDTIT" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Bilqis. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;  