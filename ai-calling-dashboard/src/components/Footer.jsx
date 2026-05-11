// src/components/Footer.jsx

import "./Footer.css";

import {
  Mail,
  Phone,
  MapPin,
  Sparkles
} from "lucide-react";

const Footer = () => {

  return (

    <footer className="footer">

      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-brand">

          <div className="footer-logo">

            <Sparkles size={18} />

            <div>

              <h2>
                TSAR AI
              </h2>

              <span>
                AI Calling Platform
              </span>

            </div>

          </div>

          <p className="footer-description">

            Transforming customer communication
            with AI-powered voice automation,
            analytics and smart calling solutions.

          </p>

          {/* SOCIALS */}
          <div className="footer-socials">

            <div className="social-icon">
              F
            </div>

            <div className="social-icon">
              X
            </div>

            <div className="social-icon">
              in
            </div>

            <div className="social-icon">
              IG
            </div>

          </div>

        </div>

        {/* SOLUTIONS */}
        <div className="footer-column">

          <h3>
            Solutions
          </h3>

          <a href="/">
            AI Calling
          </a>

          <a href="/">
            Bulk Campaigns
          </a>

          <a href="/">
            Voice Analytics
          </a>

        </div>

        {/* COMPANY */}
        <div className="footer-column">

          <h3>
            Company
          </h3>

          <a href="/">
            About Us
          </a>

          <a href="/features">
            Features
          </a>

          <a href="/pricing">
            Pricing
          </a>

        </div>

        {/* RESOURCES */}
        <div className="footer-column">

          <h3>
            Resources
          </h3>

          <a href="/">
            Help Center
          </a>

          <a href="/">
            Privacy Policy
          </a>

          <a href="/">
            Terms of Service
          </a>

        </div>

        {/* CONTACT */}
        <div className="footer-column">

          <h3>
            Contact Us
          </h3>

          <div className="contact-item">

            <Phone size={16} />

            <span>
              +91 94913 01258
            </span>

          </div>

          <div className="contact-item">

            <Mail size={16} />

            <span>
              tsarit@tsaritservices.com
            </span>

          </div>

          <div className="contact-item">

            <MapPin size={16} />

            <span>

              12-203/745, CHURCH STREET,
              NAKKABANDA,
              Punganur, Madanapalle,
              Chittoor - 517247,
              Andhra Pradesh

            </span>

          </div>

        </div>

      </div>

      {/* BOTTOM */}
<div className="footer-bottom">

  <div className="footer-bottom-content">

    <p>
      © 2026 TSAR AI Calling System. All rights reserved.
    </p>

    <div className="footer-bottom-links">

      <a href="/">
        Privacy Policy
      </a>

      <span>•</span>

      <a href="/">
        Terms of Service
      </a>

      <span>•</span>

      <a href="/">
        Cookie Policy
      </a>

    </div>

  </div>

</div>

    </footer>
  );
};

export default Footer;