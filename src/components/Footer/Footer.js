import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-content'>
        <p className="footer-text">© 2024 Raghubal.com</p>
        <div className="footer-icons">
          <a href="https://www.linkedin.com/in/raghubal-b-709826201/" target="_blank" rel="noopener noreferrer" className="icon">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:raghubal36@gmail.com" className="icon">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="tel:+919677595005" className="icon">
            <i className="fas fa-phone"></i> {/* Phone Icon */}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
