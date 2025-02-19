import React from 'react'
import { BiSolidCheckboxChecked } from "react-icons/bi";
import { LuArrowDownRight } from "react-icons/lu";
import '../styles/about.css';


export default function About() {
  return (
   <di >
    <article className='about-container'>
        <figure className='about-image-container'>
             <img 
                  src='https://ajaykumar2543.github.io/Responsive-plant-store-website-/about.jpg' 
                  alt='A beautiful plant in a stylish container' 
                  className='about-image'
             />
            
        </figure>

        <div className='about-content'>
            <h2 className='about-heading'>Why Choose Us?</h2>
            <p className='about-description'>
                We have over <strong>4000+ unbiased reviews</strong>, and our <br/> 
                customers trust our plant process and delivery <br/>  
                service every time.
            </p>

            <section className='features'>
              
                <ul className='features-list'>
                    <li className='feature-item'> 
                        <BiSolidCheckboxChecked className='feature-list-icon'/> We always deliver on time.
                    </li>
                    <li className='feature-item'> 
                        <BiSolidCheckboxChecked className='feature-list-icon'/> 100% money-back guaranteed.
                    </li>
                    <li className='feature-item'> 
                        <BiSolidCheckboxChecked className='feature-list-icon'/> We always check up after a sale.
                    </li>
                    <li className='feature-item'> 
                        <BiSolidCheckboxChecked className='feature-list-icon'/> We provide guides to care for your plants.
                    </li>
                </ul>
            </section>

            <div className='about-button-container'>
                <a href='/shop' className='shop-link'>
                    <button className='shop-button'> Shop Now <LuArrowDownRight className='shop-arrow'/></button>
                </a>
            </div> 
        </div>
    </article>
   

   {/* this should be a component later when optimising */}
   <article className='step-wrapper'>
    <h1 className='step-wrapper-title'>Steps to Start Your <br/> Plant Collection</h1>
    <section class="step-container">
        <article class="step">
            <h1 class="step-number"><span>01</span></h1>
            <h2 class="step-title">Choose a Plant</h2>
            <p class="step-description">We have several varieties <br/> of plants you can choose from.</p>
        </article>
        <article class="step">
            <h1 class="step-number"><span>02</span></h1>
            <h2 class="step-title">Place an Order</h2>
            <p class="step-description">Once your order is set, we <br/> move to the next step, which <br/> is shipping.</p>
        </article>
        <article class="step">
            <h1 class="step-number"><span>03</span></h1>
            <h2 class="step-title">Get Plants Delivered</h2>
            <p class="step-description">Our delivery  process is easy, <br/> you receive the plant directly <br/> at your door.</p>
        </article>
    </section>
</article>

   </di>
    
  )}