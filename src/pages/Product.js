import React from 'react';
import { IoBag } from "react-icons/io5";
import './product.css'

export default function Product() {
  return (
    <section aria-labelledby="products-heading" className="products">
      {/* Section Title */}
      <header className="products-header">
        <h2 id="products-heading">Check Out Our <br /> <b/> Products</h2>
        <p>
          Here are some selected plants from our showroom, all <br />
          are in excellent shape. Buy and enjoy the best quality.
        </p>
      </header>

      {/* Product List */}
      <section className="product-list">
        <article className="product-card">
          <figure>
            <img src="/home" alt="Cacti Plant" />
           
          </figure>
          <div className="product-info">
            <p className="product-price">$10.99</p>
            <button className="add-to-cart" aria-label="Add Cacti Plant to cart">
              <IoBag />
            </button>
          </div>
        </article>
      </section>
    </section>
  );
}
