import React from 'react';
import facebookLogo from './../assets/facebook-official.png';
import twitterLogo from './../assets/twitter.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">
          Copyright &copy; 2016 PT Company
        </p>
        <div className="social-icons">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src={facebookLogo} alt="Facebook" className="social-icon" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <img src={twitterLogo} alt="Twitter" className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
