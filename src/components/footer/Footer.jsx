import React from 'react'
import './footer.css'
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import img2 from "../../assets/logo2.png";


const Footer = () => {
  return (
   <footer>
    <a href="#" className='footer__logo'><img src={img2} alt="" /></a>
    <ul className="permalinks">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      {/* <li><a href="#testimonials">Testimonials</a></li> */}
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer__socials">
      <a href="https://facebook.com/hidycoal" target='_blank'><FiFacebook/></a>
      <a href="https://instagram/hidycoal" target='_blank'><BsInstagram/></a>
      <a href="https://twitter.com/hidycoal" target='_blank'><FiTwitter/></a>
      <a href="https://github.com/hidycoal" target='_blank'><FiGithub/></a>
    </div>

    <div className="footer__copyright">
      <small>&copy; Hidycoal. All rights reserved.</small>
    </div>
   </footer>
  )
}

export default Footer