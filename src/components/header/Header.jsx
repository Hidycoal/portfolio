import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.JPG'
import HeaderSocials from './HeaderSocials'
import img2 from "../../assets/logo2.png";
import {motion,useInView} from 'framer-motion'


const Header = () => {
  const text = "FRONTEND DEVELOPER";
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <header>
      <motion.div  initial={{opacity: 0, y:100}} transition={{duration: 1.5}} whileInView={{opacity: 1, y:0}} viewport={{once: true}}  className="container header__container">
        <img src={img2} className='img' alt="" />
        <h2>Hello I'm</h2>
        <h1 >FIFELOLA, OLAMIDE IDOWU</h1>
        {/* <motion.h4 style={{overflow: "hidden", whiteSpace: "nowrap"}} initial={{width: 0}} animate={{width: "100%"}} transition={{duration: 2, ease: "linear"}} className='text-light'>FRONTEND DEVELOPER</motion.h4> */}
        <h4 ref={ref} style={{overflow: "hidden", whiteSpace: "nowrap"}}>
        {text.split('').map((letter, index) => (
        <motion.span className='text-light'
          key={index}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.2, delay: index * 0.1 }}
        >
          {letter}
        </motion.span>
      ))}

        </h4>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">Scroll drown</a>
      </motion.div>
    </header>
  )
}

export default Header