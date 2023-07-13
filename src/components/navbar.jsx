import React from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css'
import logo from "../../src/assets/hslogo.jpg"

const Menu = () => {
    <>
    <p><a href="#about">About</a></p>

    </>
}
const Navbar = () => {
    return (
        <div className='cards__navbar'>
            <div className='cards__navbar-links'>
                <div className='cards__navbar-links_logo'>
                    <img src={logo} alt="logo"/>
                </div>
                <div className='cards__navbar_navbar-links-container'>
                    <Menu/>
                </div>
            </div>
        </div>
    )
}