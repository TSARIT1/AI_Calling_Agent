import "./Pricing.css";
import Navbar from "../components/Navbar";

const Pricing = () => {

  return (
    <div className="pricing-page">

      <Navbar />

      <section className="pricing-hero">

        <h1>Simple Pricing</h1>

        <p>
          Flexible plans for startups,
          teams and enterprises.
        </p>

      </section>

      <section className="pricing-grid">

        <div className="price-card">

          <h2>Starter</h2>

          <h1>₹999</h1>

          <p>/month</p>

          <ul>
            <li>500 AI Calls</li>
            <li>Analytics Dashboard</li>
            <li>Email Support</li>
          </ul>

          <button>
            Choose Plan
          </button>

        </div>

        <div className="price-card premium">

          <div className="tag">
            MOST POPULAR
          </div>

          <h2>Professional</h2>

          <h1>₹4999</h1>

          <p>/month</p>

          <ul>
            <li>Unlimited AI Calls</li>
            <li>Advanced Analytics</li>
            <li>CRM Integration</li>
            <li>Priority Support</li>
          </ul>

          <button>
            Choose Plan
          </button>

        </div>

        <div className="price-card">

          <h2>Enterprise</h2>

          <h1>Custom</h1>

          <p>Contact Sales</p>

          <ul>
            <li>Dedicated Infrastructure</li>
            <li>Custom AI Models</li>
            <li>24/7 Support</li>
          </ul>

          <button>
            Contact Us
          </button>

        </div>

      </section>

    </div>
  );
};

export default Pricing;