import React, { useRef } from 'react';
import './contact.css'
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { MdWhatsapp } from "react-icons/md";
// import emailjs from 'emailjs';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';


const Contact = () => {
  const form = useRef ();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4uibp6s', 'template_4degpd8', form.current, {
        publicKey: 'nJofIVA0iaVbVtUTX',
      })
      .then(
        () => {
          toast.success("MESSAGE SENT SUCCESSFULLY");
        },
        (error) => {
          toast.error('FAILED...TO SEND');
        },
      );
      e.target.reset();

  };

  return (
    <motion.section  initial={{opacity: 0, x:-100}} transition={{duration: 1}} whileInView={{opacity: 1, x:0}} viewport={{once: true}}  id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <a href="mailto:hidycoal@gmail.com" target='_blank'>
          <article className="contact__option" >
            <MdOutlineEmail className='contact__option__icon'/>
            <h4>Email</h4>
            <h5>hidycoal@gmail.com</h5>
            <h5>Send a mail</h5>
          </article>
          </a>
          <a href="https://m.me/hidycoal" target='_blank'>
            
          <article className="contact__option">
            <RiMessengerLine className='contact__option__icon'/>
            <h4>Messenger</h4>
            <h5>Fifelola Olamide</h5>
            <h5>Send a message</h5>
          </article>
          </a>
          <a href="https://api.whatsapp.com/send/?phone=%2B2348069505596&text&type=phone_number&app_absent=0" target='_blank'>

          <article className="contact__option">
            <MdWhatsapp className='contact__option__icon'/>
            <h4>Whatsapp</h4>
            <h5>Fifelola Olamide</h5>
            <h5>Chat with me</h5>
          </article>
          </a>
        </div>
        {/* End of contact option */}


        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' className="text" required placeholder='Your full name'/>
          <input type="email" className="email" required placeholder='Your email' />
          <textarea className="message" name='message' rows="10" placeholder='Your message'></textarea>
          <button className="btn btn-primary" type='submit'>Send message</button>
        </form>
      </div>
    </motion.section>
  )
}

export default Contact
