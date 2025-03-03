import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FiAward } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import {motion} from 'framer-motion'


const About = () => {

  

  return (
    <motion.section  initial={{opacity: 0, x:-200}} transition={{duration: 1}} whileInView={{opacity: 1, x:0}} viewport={{once: true}}  id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <div className="img">
              <img src={ME} alt="About Image" />
            </div> 
              {/* <img src={ME} alt="About Image" /> */}
           
            {/* <img src={ME} alt="About Image" /> */}
          </div>
        </div>
        <div className="about__content">
          {/* <div className="about__cards">
              <article className='about__card'>
                <FiAward className='about__icon'/>
                <h5>Experience</h5>
                <small>0++ Years Working</small>
              </article>

              <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>0++ clients</small>
              </article>

              <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>0++ Completed Projects</small>
              </article>
          </div> */}

          <p>I'm a creative frontend developer based in Nigeria, passionate about creating seamless web experiences and easy accessibility for all users. My focus is on crafting intuitive, responsive, user-friendly interfaces that empowers users and drives meaningful brand growth. I'm comfortable in my ability in adapting to new technologies, as well as to collaborate with cross-functional teams. I'm always looking for new challenges to take on.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>

    </motion.section>
  )
}

export default About