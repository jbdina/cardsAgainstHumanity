import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className="CAH__header__padding" id="home">
            <div className="CAH__header-content">
                <h1 className="gradient__text">Cards Against Humanity</h1>
                <p>This website is a project created for the course “web and media programming” at the Anhalt University of Applied Sciences.
                    Our task was to create a responsive webpage, where users can play the popular game “Cards Against Humanity”.
                </p>
            </div>
        </div>
    )
}

export default Header