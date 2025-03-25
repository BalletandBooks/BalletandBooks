import React from 'react';
import './nav-css.css';

const Nav: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="logo">Logo</div>
            <div className="nav-links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    );
};

export default Nav;