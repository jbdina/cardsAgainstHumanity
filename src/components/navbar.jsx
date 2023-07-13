import React from 'react'
//import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css'
import logo from "../../src/assets/hslogo.jpg"

/*const Menu = () => (
    <div className="menu">
         <p><a href="#about">About</a></p>
         <p><a href="#cardsAgainstHumanity">Cards Against Humanity</a></p>
         <p><a href="#help">Help</a></p>

    </div>
);

 */


const Navbar = () => {
   // const [toggleMenu,setToggleMenu] = useState(false);
    return (
        <div className='cards__navbar'>
            <div className='cards__navbar-links'>
                <div className='cards__navbar-links_logo'>
                    <img src={logo} alt="logo"/>
                </div>
                <div className='cards__navbar-links_container'>
                    <p><a href="#about">About</a></p>
                    <p><a href="#player-container">Cards Against Humanity</a></p>
                    <p><a href="#questions">Help</a></p>
                </div>
            </div>




        </div>
    )
}
export default Navbar