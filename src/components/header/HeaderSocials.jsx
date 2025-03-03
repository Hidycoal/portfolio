import React from 'react'
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";


const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://facebook.com/hidycoal" target='_blank'><FiFacebook/></a>
      <a href="https://instagram/hidycoal" target='_blank'><BsInstagram/></a>
      <a href="https://twitter.com/hidycoal" target='_blank'><FiTwitter/></a>
      <a href="https://github.com/hidycoal" target='_blank'><FiGithub/></a>
    </div>
  )
}

export default HeaderSocials