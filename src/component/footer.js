import React from "react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      
      {/* Contact Section */}
      <section className="footer-contact">
        <h2 className="footer-title">Reach Out To Us Today</h2>
        
        <address className="footer-address">
          <p className="footer-text">Call Us For Instant Support</p>
          <a href="tel:+5144634679" className="footer-phone">+514 463 4679</a>
          
          <h3 className="footer-subtitle">Write Us by Mail</h3>
          <a href="mailto:Greenify@email.com" className="footer-email">Greenify@email.com</a>
        </address>
      </section>

      {/* Contact Form */}
      <section className="footer-form-section" aria-labelledby="contact-form-heading">
        <h2 id="contact-form-heading" className="footer-title">Contact Us</h2>
        <form className="footer-form">
          
          <label htmlFor="email" className="footer-label">Email:</label>
          <input type="email" name="email" id="email" className="footer-input" placeholder="Email" required />

          <label htmlFor="subject" className="footer-label">Subject:</label>
          <input type="text" name="subject" id="subject" className="footer-input" placeholder="Subject" required />

          <label htmlFor="message" className="footer-label">Message:</label>
          <textarea name="message" id="message" className="footer-textarea" rows="5" placeholder="Your message here..." required></textarea>

          <button type="submit" className="footer-button">Send Message</button>
        </form>
      </section>
      
    </footer>
  );
}
