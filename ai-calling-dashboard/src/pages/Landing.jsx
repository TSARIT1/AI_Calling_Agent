import "./Landing.css";
import { Phone, BarChart3, Bot, ShieldCheck } from "lucide-react";
import Navbar from "../components/Navbar";
const Landing = () => {
  return (
    <div className="landing">
        <Navbar/>
      {/* HERO */}
      <section className="hero">
        <h1 className="hero-title">
          TSAR AI Calling System
        </h1>

        <p className="hero-subtitle">
          Automate customer calls with AI-powered voice agents.
          Smart conversations, real-time analytics, and scalable communication.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Live Demo</button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2 className="section-title">Powerful Features</h2>

        <div className="features-grid">

          <div className="card">
            <Phone className="icon" size={32} />
            <h3>Automated Calls</h3>
            <p>Trigger calls instantly from dashboard</p>
          </div>

          <div className="card">
            <Bot className="icon" size={32} />
            <h3>AI Conversations</h3>
            <p>Smart human-like AI responses</p>
          </div>

          <div className="card">
            <BarChart3 className="icon" size={32} />
            <h3>Analytics</h3>
            <p>Real-time insights and reports</p>
          </div>

          <div className="card">
            <ShieldCheck className="icon" size={32} />
            <h3>Secure</h3>
            <p>Enterprise-level security</p>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how">
        <h2 className="section-title">How It Works</h2>

        <div className="how-grid">
          <div>
            <h3>1. Trigger Call</h3>
            <p>Start calls directly from dashboard</p>
          </div>

          <div>
            <h3>2. AI Interaction</h3>
            <p>AI talks and understands user</p>
          </div>

          <div>
            <h3>3. Get Insights</h3>
            <p>Analyze call performance instantly</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to Automate Your Calls?</h2>
        <button className="btn-primary big">Start Now</button>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2026 TSAR AI Calling System. All rights reserved.
      </footer>

    </div>
  );
};

export default Landing;