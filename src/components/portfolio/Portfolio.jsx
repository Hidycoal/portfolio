import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import { motion } from 'framer-motion'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Food Delivery App',
    github: 'https://github.com/Hidycoal/foodDelivery',
    demo: 'http://fooddelfrontend.surge.sh'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Real Estate Website',
    github: 'https://github.com/Hidycoal/Estate',
    demo: 'https://estate-beta-blush.vercel.app'
  },
  {
    id: 3,
    image: IMG3,
    title: 'English Dictionary App',
    github: 'https://github.com/Hidycoal/dictionary',
    demo: 'https://dictionary-nx90.onrender.com'
  },
  // {
  //   id: 4,
  //   image: IMG4,
  //   title: 'Prayer Application Elements',
  //   github: 'https://github.com',
  //   demo: 'https://dribbble.com/shots/24927274-Whole-Body-Prayer-Application-Elements'
  // },
  // {
  //   id: 5,
  //   image: IMG5,
  //   title: 'HR UX-UI design',
  //   github: 'https://github.com',
  //   demo: 'https://dribbble.com/shots/23188844-Sence-Point-HR-UX-UI-design'
  // },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: 'Website Design for Arist',
  //   github: 'https://github.com',
  //   demo: 'https://dribbble.com/shots/24537724-Website-Design-for-Arist'
  // },
]

const Portfolio = () => {
  return (
    <motion.section initial={{opacity: 0, x:-200}} transition={{duration: 1}} whileInView={{opacity: 1, x:0}} viewport={{once: true}}  id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item__image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item__cta">
                  <a href={github} className="btn" target='_blank'>Github</a>
                  <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
                  
                </div>
              </article>      
            )
          })
        }




        {/* <article className="portfolio__item">
          <div className="portfolio__item__image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item__cta">

          <a href="https://github.com" className="btn" target='_blank'>Github</a>
          <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target='_blank'>Live demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item__image">
            <img src={IMG2} alt="" />
          </div>

          <h3>This is a portfolio item title</h3>
          
          <div className="portfolio__item__cta">
            
          <a href="https://github.com" className="btn" target='_blank'>Github</a>
          <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target='_blank'>Live demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item__image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>

          <div className="portfolio__item__cta">
            
          <a href="https://github.com" className="btn" target='_blank'>Github</a>
          <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target='_blank'>Live demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item__image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>

          <div className="portfolio__item__cta">
            
          <a href="https://github.com" className="btn" target='_blank'>Github</a>
          <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target='_blank'>Live demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item__image">
            <img src={IMG5} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>

          <div className="portfolio__item__cta">
            
          <a href="https://github.com" className="btn" target='_blank'>Github</a>
          <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target='_blank'>Live demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item__image">
            <img src={IMG6} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>

          <div className="portfolio__item__cta">
            
          <a href="https://github.com" className="btn" target='_blank'>Github</a>
          <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target='_blank'>Live demo</a>
          </div>
        </article> */}
      </div>
    </motion.section>
  )
}

export default Portfolio