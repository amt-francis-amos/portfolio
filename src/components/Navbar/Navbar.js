import React from 'react'
import './navbar.css';
import logoImg from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
        <nav className='navbar'>
                <img src={logoImg} alt="logo" className='logo'/>
                <div className="desktopMenu">
                    <Link  to='/' className="desktopMenuListItem">Home </Link>
                    <Link to='/' className="desktopMenuListItem">About</Link>
                    <Link to='/' className="desktopMenuListItem">Portfolio</Link>
                    <Link to='/' className="desktopMenuListItem">Clients</Link>
                </div>
                <button className="desktopMenuBtn">
                    <img src={contactImg} alt="contact" className="desktopMenuImg" />
                    Contact Me
                </button>
        </nav>
  )
}

export default Navbar
