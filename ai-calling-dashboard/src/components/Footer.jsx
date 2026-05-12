// src/components/Footer.jsx

import "./Footer.css";

import {
  Mail,
  Phone,
  MapPin,
  Sparkles,
} from "lucide-react";

const Footer = () => {

  return (

    <footer className="in-footer">

      <div className="in-container">

        <div className="in-footer-grid">

          {/* ABOUT */}
          <div className="in-footer-col in-footer-about">

            <div className="in-footer-logo">

              <div className="logo-box">
                <Sparkles size={22} />
              </div>

              <div>

                <h2>
                  TSAR IT AI
                </h2>

                <span>
                  AI Calling Platform
                </span>

              </div>

            </div>

            <p className="in-footer-about-text">

              Transforming customer communication
              with AI-powered voice automation,
              analytics and smart calling solutions.

            </p>

            {/* SOCIALS */}
            <div className="in-footer-social">

              <a href="/">
                F
              </a>

              <a href="/">
                X
              </a>

              <a href="/">
                in
              </a>

              <a href="/">
                IG
              </a>

            </div>

          </div>

          {/* SOLUTIONS */}
          <div className="in-footer-col">

            <h3 className="in-footer-title">
              Solutions
            </h3>

            <ul className="in-footer-links">

              <li>
                <a href="/">
                  AI Calling
                </a>
              </li>

              <li>
                <a href="/">
                  Bulk Campaigns
                </a>
              </li>

              <li>
                <a href="/">
                  Voice Analytics
                </a>
              </li>

            </ul>

          </div>

          {/* COMPANY */}
          <div className="in-footer-col">

            <h3 className="in-footer-title">
              Company
            </h3>

            <ul className="in-footer-links">

              <li>
                <a href="/">
                  About Us
                </a>
              </li>

              <li>
                <a href="/features">
                  Features
                </a>
              </li>

              <li>
                <a href="/pricing">
                  Pricing
                </a>
              </li>

            </ul>

          </div>

          {/* RESOURCES */}
          <div className="in-footer-col">

            <h3 className="in-footer-title">
              Resources
            </h3>

            <ul className="in-footer-links">

              <li>
                <a href="/">
                  Help Center
                </a>
              </li>

              <li>
                <a href="/">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="/">
                  Terms of Service
                </a>
              </li>

            </ul>

          </div>

          {/* CONTACT */}
          <div className="in-footer-col in-footer-contact">

            <h3 className="in-footer-title">
              Contact Us
            </h3>

            <ul className="in-footer-contact-info">

              <li>

                <Phone size={18} />

                <a href="tel:+919491301258">
                  +91 94913 01258
                </a>

              </li>

              <li>

                <Mail size={18} />

                <a href="mailto:tsarit@tsaritservices.com">
                  info@tsaritservices.com
                </a>

              </li>

              <li>

                <MapPin size={18} />

                <p>

                  12-203/745, CHURCH STREET,
                  NAKKABANDA,
                  <br />

                  Punganur, Madanapalle,
                  Chittoor - 517247,
                  <br />

                  Andhra Pradesh

                </p>

              </li>

            </ul>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="in-footer-bottom">

          <p>
            © 2026 TSAR AI Calling System.
            All rights reserved.
          </p>

          <div className="in-footer-legal">

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