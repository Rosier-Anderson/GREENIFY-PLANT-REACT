import React from 'react'
import { BiSolidCheckboxChecked } from "react-icons/bi";
import { LuArrowDownRight } from "react-icons/lu";
import './about.css'

export default function About() {
  return (
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
                    <button className='shop-button'> Shop Now <LuArrowDownRight/></button>
                </a>
            </div> 
        </div>
    </article>
  )
}
