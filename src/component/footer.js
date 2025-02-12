import React from "react";
import "../styles/footer.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLeafLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        {/* Contact Section */}
        <section className="footer-contact">
          <h2 className="footer-title">Reach Out To Us Today</h2>
          <address className="footer-address">
            <div className="footer-phone-wrapper">
              <p className="footer-text">Call Us For Instant Support</p>
              <a href="tel:+5144634679" className="footer-phone">
                <FaPhoneAlt /> +514 463 4679
              </a>
            </div>
            <div className="footer-email-wrapper">
              <p className="footer-subtitle">Write Us by Mail</p>
              <a href="mailto:Greenify@email.com" className="footer-email">
                <MdEmail /> Greenify@email.com
              </a>
            </div>
          </address>
        </section>

        {/* Contact Form */}
        <section className="footer-form-section">
          <form className="footer-form">
            <label htmlFor="email" className="footer-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="footer-input"
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
              required
            ></textarea>

            <button type="submit" className="footer-button">
              Submit
            </button>
          </form>
        </section>
      </div>

      {/* Footer Navigation */}
      <section className="footer-bottom">
        <div className="header-nav-logo">
          <a
            className="header-nav-logo-link"
            href="./home"
            aria-label="Greenify Logo"
          >
            <RiLeafLine className="header-nav-logo-icon" /> GREENIFY
          </a>
          <div className="footer-newsletter">
            <h3 className="footer-newsletter-title">
              Subscribe to our newsletter
            </h3>
            <form className="footer-newsletter-form">
              <input
                type="email"
                className="footer-newsletter-input"
                placeholder=" Enter your email"
              />
              <button contentEditable="false" type="submit" className="footer-newsletter-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="footer-address-section">
          <h3 className="footer-section-title">Our Address</h3>
          <p className="footer-address-text">1234 - India</p>
          <p className="footer-address-text">Delhi - 43210</p>
          <p className="footer-address-text">123-456-789</p>
        </div>

        <div className="footer-contact-section">
          <h3 className="footer-section-title">Contact Us</h3>
          <p className="footer-contact-number">+91 9988776655</p>
          <div className="footer-social-links">
            <a href="#" className="footer-social-icon">
              <FaFacebookF />
            </a>
            <a href="#" className="footer-social-icon">
              <AiOutlineInstagram />
            </a>
            <a href="#" className="footer-social-icon">
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="footer-payment-section">
          <h3 className="footer-section-title">We accept all credit cards</h3>
          <div className="footer-payment-icons">
            <img
              src="https://ajaykumar2543.github.io/Responsive-plant-store-website-/card1.png"
              alt="Credit Card 1"
              className="footer-card"
            />
            <img
              src="https://ajaykumar2543.github.io/Responsive-plant-store-website-/card2.png"
              alt="Credit Card 2"
              className="footer-card"
            />
            <img
              src="https://ajaykumar2543.github.io/Responsive-plant-store-website-/card3.png"
              alt="Credit Card 3"
              className="footer-card"
            />
            <img
              src="https://ajaykumar2543.github.io/Responsive-plant-store-website-/card4.png"
              alt="Credit Card 4"
              className="footer-card"
            />
          </div>
        </div>
      </section>
      <p className="footer-copyright">TechAR Challenge. All rights reserved</p>
    </footer>
  );
}
