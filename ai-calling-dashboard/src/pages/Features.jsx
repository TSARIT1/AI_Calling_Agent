import "./Features.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  Bot,
  PhoneCall,
  ShieldCheck,
  BarChart3,
  Globe,
  Database,
} from "lucide-react";

const Features = () => {

  return (
    <div className="features-page">

      <Navbar />

      <section className="features-hero">

        <h1>
          Powerful AI Calling Features
        </h1>

        <p>
          Everything you need to automate,
          monitor and scale customer communication.
        </p>

      </section>

      <section className="features-grid">

        <div className="feature-card">
          <PhoneCall className="icon" />
          <h3>AI Voice Calls</h3>
          <p>
            Human-like automated conversations.
          </p>
        </div>

        <div className="feature-card">
          <Bot className="icon" />
          <h3>AI Responses</h3>
          <p>
            Intelligent real-time conversations.
          </p>
        </div>

        <div className="feature-card">
          <BarChart3 className="icon" />
          <h3>Analytics</h3>
          <p>
            Track live performance and insights.
          </p>
        </div>

        <div className="feature-card">
          <ShieldCheck className="icon" />
          <h3>Secure Access</h3>
          <p>
            OTP authentication and encryption.
          </p>
        </div>

        <div className="feature-card">
          <Globe className="icon" />
          <h3>Global Calling</h3>
          <p>
            Reach customers worldwide.
          </p>
        </div>

        <div className="feature-card">
          <Database className="icon" />
          <h3>CRM Integration</h3>
          <p>
            Manage customers and campaigns.
          </p>
        </div>

      </section>

      <Footer/>

    </div>
  );
};

export default Features;