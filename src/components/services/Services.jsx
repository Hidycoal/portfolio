import React from 'react'
import './services.css';
import { BiCheck } from "react-icons/bi";
import { FaRegDotCircle } from "react-icons/fa";
import { motion } from 'framer-motion';


const Services = () => {
  return (
  <motion.section  initial={{opacity: 0, y:-200}} transition={{duration: 1}} whileInView={{opacity: 1, y:0}} viewport={{once: true}}  id='services'>
    <h5>What I offer</h5>
    <h2>My Services</h2>

    <div className="container services__container">

    {/* GRAPICS DESIGN */}
    <article className="service">
      <div className="service__head">
        <h3>Graphics Design</h3>
      </div>
      <ul className="service__list">
        <li>
          <FaRegDotCircle className='service__list__icon'/>
          <p>UI Design</p>
        
        </li>
        <li>
          <FaRegDotCircle className='service__list__icon'/>
          <p>Website & Digital Design</p>
        
        </li>
        <li>
          <FaRegDotCircle className='service__list__icon'/>
          <p>Branding & Visual Identity</p>
        
        </li>
        <li>
          <FaRegDotCircle className='service__list__icon'/>
          <p>Animation & Motion Graphics</p>
        
        </li>
        <li>
          <FaRegDotCircle className='service__list__icon'/>
          <p>Print Design</p>
        
        </li>
      </ul>
    </article>
    
    {/* END OF GRAPHICS */}
    {/* DEVELOPMENT */}

    <article className="service">
      <div className="service__head">
        <h3>Web Development</h3>
      </div>
      <ul className="service__list">
        <li>
          <FaRegDotCircle className='service__list__icon'/>
          <p>Responsive Web Design</p>
        
        </li>
        <li>
          <FaRegDotCircle className='service__list__icon'/>
          <p>Mobile App Development</p>
        
        </li>
        <li>
          <FaRegDotCircle className='service__list__icon'/>
          <p>Content Management</p>
        
        </li>
        <li>
          <FaRegDotCircle className='service__list__icon'/>
          <p>E-Commerce</p>
        
        </li>
        <li>
          <FaRegDotCircle className='service__list__icon'/>
          <p>Search Engine Optimization</p>
        
        </li>
      </ul>
    </article>
    
    {/* WEB DEVELOPMENT */}
    {/* CONTENT CREATION */}

    {/* <article className="service">
      <div className="service__head">
        <h3>SEO Marketing</h3>
      </div>
      <ul className="service__list">
        <li>
          <FaRegDotCircle className='service__list__icon'/>
          <p>White Hat SEO</p>
        
        </li>
        <li>
          <FaRegDotCircle className='service__list__icon'/>
          <p>Black Hat SEO</p>
        
        </li>
        <li>
          <FaRegDotCircle className='service__list__icon'/>
          <p>Grey Hat SEO</p>
        
        </li>
        <li>
          <FaRegDotCircle className='service__list__icon'/>
          <p>Negative SEO</p>
        
        </li>
        <li>
          <FaRegDotCircle className='service__list__icon'/>
          <p>On-Page SEO</p>
        
        </li>
      </ul>
    END OF CONTENT CREATION 
    </article> */}
    </div>
  </motion.section>
  )
}

export default Services
