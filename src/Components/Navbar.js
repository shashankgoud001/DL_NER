import React from 'react'
import logo from '../media/logo.png'
import Styles from './NavbarComp.module.css'
const Navbar = () =>{
  return (
    <div id={Styles.navbar}>
      <img src={logo} id></img>
      <div id={Styles.pages}>
        <a href='/'>Home</a>
        <a href='/about'>About Us</a>
        <a href='/events'>Events</a>
        <a href='/contact'>Contact Us</a>
      </div>
    </div>
  )
}

export default Navbar
