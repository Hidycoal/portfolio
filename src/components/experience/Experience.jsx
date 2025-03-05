import React from 'react'
import './experience.css'

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiMui } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { FaNpm } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { BsPatchCheckFill } from "react-icons/bs";
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoGithub } from "react-icons/io";
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.section  initial={{opacity: 0, x:100}} transition={{duration: 1}} whileInView={{opacity: 1, x:0}} viewport={{once: true}}  id='experience'>
      <h5>What do I know</h5>
      <h2>My Skills</h2>

      <div className="container experience__container">
        
        {/* BEGINNING OF Languages */}
        <div className="experience__languages">
          <h3>Languages</h3>
          <div className="experience__content">
            <article className="experience__details">
            <FaHtml5 className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                {/* <small className="text-light">Experienced</small>   */}
              </div>
            </article>
            {/* <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article> */}
            <article className="experience__details">
            <FaCss3Alt className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
            <FaJs className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            {/* <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Material UI</h4>
                <small className="text-light">Basic</small>
              </div>
            </article> */}
          </div>
        </div>

        {/* END OF Languages */}

        {/* BEGINNING OF Libraries */}
        <div className="experience__libraries">
        <h3>Libraries</h3>
          <div className="experience__content">
            <article className="experience__details">
            <FaReact className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
            </article>
            <article className="experience__details">
            <SiStyledcomponents className='experience__details-icon'/>
              <div>
                <h4>Styled Components</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
            </article>
            <article className="experience__details">
            <SiMui className='experience__details-icon'/>
              <div>
                <h4>Material UI</h4>
                {/* <small className="text-light">Basic</small>      */}
              </div>
            </article>
            <article className="experience__details">
              <TbBrandReactNative className='experience__details-icon'/>
              <h4>React Native</h4>
              {/* <small className="text-light">Experienced</small> */}
            </article>
          </div>
        </div>
        {/* END OF Libraries */}

        {/* BEGINNING OF Frameworks */}
        <div className="experience__Frameworks">
        <h3>Frameworks</h3>
          <div className="experience__content">
            <article className="experience__details">
            <RiTailwindCssLine className='experience__details-icon'/>
              <div>
                <h4>Tailwind</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
            </article>
            <article className="experience__details">
            <FaBootstrap className='experience__details-icon'/>
              <div>
                <h4> Bootstrap</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
            </article>
            <article className="experience__details">
            <FaSass className='experience__details-icon'/>
              <div>
                <h4>Sass</h4>
                {/* <small className="text-light">Basic</small>      */}
              </div>
            </article>
            {/*
             <article className="experience__details">
              <BsPatchCheckFill />
              <h4>React</h4>
              <small className="text-light">Experienced</small>
            </article> */}
          </div>
        </div>
        {/* END OF Frameworks */}
        
        {/* BEGINNING OF Tools */}
        <div className="experience__Tools">
        <h3>Tools & Systems</h3>
          <div className="experience__content">
            <article className="experience__details">
            <FaGit className='experience__details-icon'/>
              <div>
                <h4>Git</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
            </article>
            <article className="experience__details">
            <FaNpm className='experience__details-icon'/>
              <div>
                <h4>Npm</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
            </article>
            <article className="experience__details">
            <VscVscode className='experience__details-icon'/>
              <div>
                <h4>VSCode</h4>
                {/* <small className="text-light">Basic</small>      */}
              </div>
            </article>
            <article className="experience__details">
              <IoLogoGithub className='experience__details-icon'/>
              <h4>GitHub</h4>
              {/* <small className="text-light">Experienced</small> */}
            </article>
          </div>
        </div>
        {/* END OF Tools */}

      </div>
    </motion.section>
  )
}

export default Experience