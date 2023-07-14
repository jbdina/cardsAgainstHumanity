import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css'
import logo from "./../assets/hslogo.jpg"

const Menu = () => (
    <>
        <p><a className="rainbow-text" href="#about">About</a></p>
        <p><a className="rainbow-text" href="#player-container">Cards Against Humanity</a></p>
    </>

)

const Navbar = () => {
    //Boolean um
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        /* Aufbau des Menüs für breite Bildschirme */
        <div className='cah__navbar'>
            <div className='cah__navbar-links'>
                <div className='cah__navbar-links_logo'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='cah__navbar-links_container'>
                    <Menu/>
                </div>
            </div>
            <div className='cah__navbar-help rainbow-text'>
                <p><a href="#questions">Help</a></p>
            </div>
            {/* Aufbau des Menüs für schmale Bildschirme */}
            <div className='cah__navbar-menu'>
                {toggleMenu
                    /* wenn das Mobile-Menü verwendet wird, öffne/schließe Menü onClick und wechsle zwischen den Menü-Icons*/
                    ? <RiCloseLine color="#ECE5F0" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#ECE5F0" size={27} onClick={() => setToggleMenu(true)} />
                }
                {/* toggleMenu auf true gesetzt wurde und wum__navbar-menu display != none, öffne das Menü mit Animation*/}
                {toggleMenu && (
                    <div className='cah__navbar-menu_container scale-up-center'>
                        <div className='cah__navbar-menu_container-links'>
                            <Menu/>
                        </div>
                        <div className='cah__navbar-menu_container-links-help rainbow-text'>
                            <p><a href="#questions">Help</a></p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar