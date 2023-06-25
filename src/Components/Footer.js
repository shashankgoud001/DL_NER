import React from 'react'
import Styles from './Footer.module.css'
import { FaCopyright, FaFacebookSquare, FaInstagram, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div id={Styles.Footer}>
      <div id={Styles.container}>

        <div id={Styles.left}>
          <h1>About Us</h1>
          <p>KIG is an initiative to spread awareness about the investment field and make enthusiastic students more capable of making financial decisions.</p>
        </div>
        <div id={Styles.middle}>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Events</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div id={Styles.right}>
          <h3>Follow Us On</h3>
          <div id={Styles.icons}>
            <a href="https://www.facebook.com/KIG.IIT.KGP/"><FaFacebookSquare className="text-white ms-1" size='30' color='white'/></a>
            <a href="https://www.instagram.com/k.i.g_iitkgp/?igshid=1sf5u3ycx2t45"><FaInstagram className="text-white " size='30' color='white' /></a>
            <a href="https://www.linkedin.com/company/kharagpurinvestmentgroup?originalSubdomain=in"><FaLinkedin className="text-white ms-1" size='30' color='white' /></a>
            <a href=""><FaTwitter className="text-white ms-1" size='30' color='white'/></a>
          </div>
        </div>
      </div>
      <div id={Styles.copyright}>Copyright © 2023 KIG - All Rights Reserved.</div>
    </div>
  )
}

export default Footer
