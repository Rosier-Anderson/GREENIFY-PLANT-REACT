import React from "react";
import { IoBag } from "react-icons/io5";
import '../styles/product.css'

export default function Product() {
  const productsList = [
    {
      id: 1,
      name: "Cacti Plant",
      img: "https://ajaykumar2543.github.io/Responsive-plant-store-website-/product1.png",
      price: "$10.99",
    },
    {
      id: 2,
      name: "Cacti Plant",
      img: "https://ajaykumar2543.github.io/Responsive-plant-store-website-/product2.png",
      price: "$10.99",
    },
    {
      id: 3,
      name: "Cactus Plant",
      img: "https://ajaykumar2543.github.io/Responsive-plant-store-website-/product3.png",
      price: "$10.99",
    },
    {
      id: 4,
      name: "Aloe Vera Plant",
      img: "https://ajaykumar2543.github.io/Responsive-plant-store-website-/product4.png",
      price: "$10.99",
    },
    {
      id: 5,
      name: "Succulent Plant",
      img: "https://ajaykumar2543.github.io/Responsive-plant-store-website-/product5.png",
      price: "$10.99",
    },
    {
      id: 6,
      name: "Succelent Plant",
      img: "https://ajaykumar2543.github.io/Responsive-plant-store-website-/product6.png",
      price: "$10.99",
    },
  ];

  return (
    <section aria-labelledby="products-heading" className="products">
      {/* Section Title */}
      <header className="products-header">
        <h2 id="products-heading">
          Check Out Our <br /> Products
        </h2>
        <p>
          Here are some selected plants from our showroom, all <br />
          <span className="second-line">
            are in excellent shape. Buy and enjoy the best quality.
          </span>
        </p>
      </header>

      {/* Product List */}

      <section className="product-list">
        {productsList.map(({ id, name, price, img }) => (
          <article key={id} className="product-card">
            <figure className="product-figure">
              <img src={img} alt={name} className="product-img"/>
            </figure>
            <div className="product-info">
              <strong><p className="product-name">{name}</p></strong>
             <strong><p className="product-price">{price}</p></strong>
              <button
                className="add-to-cart"
                aria-label={`Add ${name} to cart`}
              >
                <IoBag className="add-to-card-icon" />
              </button>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
}
