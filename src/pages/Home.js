import React from "react";
import "../styles/home.css";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa6";
import { LuArrowDownRight } from "react-icons/lu";
import { TfiLayoutLineSolid } from "react-icons/tfi";
export default function Home() {
  return (
    <section className="home-wrapper">
      <div className="home-left">
        
        <h2 className="home-title">
          
          Bringing Life <br /> To Your Space
        </h2>
        <p className="home-left-desc">
          Whether you're a seasoned gardener or just <br /> starting out, we're
          here to help you grow your <br /> plant collection.
        </p>
        <button className="home-left-btn">
         <span> Explore </span>  <LuArrowDownRight className="home-left-arrow" />
        </button>
      </div>
      <div className="home-right">
        <img
          className="home-right-img"
          src="https://ajaykumar2543.github.io/Responsive-plant-store-website-/home.png"
          alt="A pot of plants beautifully arranged."
        />
        <div className="home-right-link">
          <p className="home-right-link-text">Follow Us <span className="home-line"><TfiLayoutLineSolid  /></span></p>
          <a>
            <FaFacebookF />
          </a>
          <a>
            <AiOutlineInstagram />
          </a>
          <a>
            <FaTwitter />
          </a>
        </div>
      </div>
    </section>
  );
}
