import React from 'react'
import './services.css';
import { BiCheck } from "react-icons/bi";
import { FaRegDotCircle } from "react-icons/fa";
import { motion } from 'framer-motion';


const Services = () => {
  return (
  <motion.section  initial={{opacity: 0, y:-100}} transition={{duration: 1}} whileInView={{opacity: 1, y:0}} viewport={{once: true}}  id='services'>
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
          <p>UI/UX Design</p>
        
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
          <p>API Integration</p>
        
        </li>
        <li>
          <FaRegDotCircle className='service__list__icon'/>
          <p>Search Engine Optimization</p>
        
        </li>
      </ul>
    </article>
    
    {/* WEB DEVELOPMENT */}
    {/* NETWORKING */}

    <article className="service">
      <div className="service__head">
        <h3>Networking</h3>
      </div>
      <ul className="service__list">
        <li>
          <FaRegDotCircle className='service__list__icon'/>
          <p>Fibre Optic Installation & Mainteinance</p>
        
        </li>
        <li>
          <FaRegDotCircle className='service__list__icon'/>
          <p>Surveillance Systems</p>
        
        </li>
        <li>
          <FaRegDotCircle className='service__list__icon'/>
          <p>Voice Over IP</p>
        
        </li>
        <li>
          <FaRegDotCircle className='service__list__icon'/>
          <p>Networking Solutions</p>
        
        </li>
        <li>
          <FaRegDotCircle className='service__list__icon'/>
          <p>Consultation</p>
        
        </li>
      </ul>
     {/* END OF CONTENT CREATION */}
    </article>
    </div>
  </motion.section>
  )
}

export default Services
