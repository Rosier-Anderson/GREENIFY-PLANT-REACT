import React from 'react'
import { BiSolidCheckboxChecked } from "react-icons/bi";
import { LuArrowDownRight } from "react-icons/lu";
import './about.css'

export default function About() {
  return (
    <section className='about-container'>
        <figure className='about-image-container'>
             <img src='https://ajaykumar2543.github.io/Responsive-plant-store-website-/about.jpg' 
                  alt='A beautiful plant in a stylish container' 
                  className='about-image'/>
        </figure>
         <div className='about-content'>
            <h4 className='about-heading'>Why Choose Us?</h4>
            <p className='about-description'>
                We have 4000+ unbiased reviews and our <br/> 
                customers trust our plant process and delivery <br/>  
                service every time
            </p>
            <div className='about-features'>
                <ul className='features-list'>
                    <li className='feature-item'> <BiSolidCheckboxChecked /> We always deliver on time.</li>
                    <li className='feature-item'> <BiSolidCheckboxChecked /> 100% money back guaranteed.</li>
                    <li className='feature-item'> <BiSolidCheckboxChecked /> We always come over for a check-up after sale.</li>
                    <li className='feature-item'> <BiSolidCheckboxChecked /> We give you guides to protect and care for your plants.</li>
                </ul>
            </div>
            <div className='about-button-container'>
                <button className='shop-button'> Shop Now <LuArrowDownRight/></button>
            </div> 
         </div>
    </section>
  )
}
