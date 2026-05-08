import "./Contact.css";
import Navbar from "../components/Navbar";

const Contact = () => {

  return (
    <div className="contact-page">

      <Navbar />

      <section className="contact-hero">

        <h1>Contact Us</h1>

        <p>
          Have questions about TSAR AI?
          Reach out to our team.
        </p>

      </section>

      <div className="contact-container">

        <div className="contact-card">

          <h2>Get In Touch</h2>

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
          ></textarea>

          <button>
            Send Message
          </button>

        </div>

      </div>

    </div>
  );
};

export default Contact;