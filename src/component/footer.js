import React from "react";
import "../styles/footer.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Contact Section */}
      <section className="footer-contact">
        <h2 className="footer-title">Reach Out To Us Today</h2>

        <address className="footer-address">
          <div className="footer-phone-wraper">
            <p className="footer-text">Call Us For Instant Support</p>
            <a href="tel:+5144634679" className="footer-phone">
            <FaPhoneAlt />  +514 463 4679
            </a>
          </div>
          <div className="footer-email-wrapper">
            <p className="footer-subtitle">Write Us by Mail</p>
            <a href="mailto:Greenify@email.com" className="footer-email">
            <MdEmail />  Greenify@email.com
            </a>
          </div>
        </address>
      </section>

      {/* Contact Form */}
      <section
        className="footer-form-section"
        aria-labelledby="contact-form-heading"
      >
        <form className="footer-form">
          <label htmlFor="email" className="footer-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="footer-input"
            placeholder=""
            required
          />

          <label htmlFor="subject" className="footer-label">
            Subject
          </label>
          <input
               type="text"
            name="subject"
            id="subject"
            className="footer-input"
            placeholder=""
            required
          />

          <label htmlFor="message" className="footer-label">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="footer-textarea"
            rows="5"
            placeholder=""
            maxLength="5"
            minLength="3"
            required
          ></textarea>

          <button type="submit" className="footer-button">
           Submit
          </button>
        </form>
      </section>
    </footer>
  );
}
