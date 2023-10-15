import React from 'react'
import './navbar.css';
import logoImg from '../../assets/logo.png'

const Navbar = () => {
  return (
        <nav className='navbar'>
                <img src={logoImg} alt="/" />
                <div className="desktopMenu">

                </div>
                <div className="desktopMenuBtn">
                    <img src="" alt="" className="desktopMenuIng" />
                    Contact Me
                </div>
        </nav>
  )
}

export default Navbar
