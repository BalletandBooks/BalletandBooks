import React from 'react';
import './nav-css.css';
import balletAndBooks from '../assets/logo.png.webp';

const Nav: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="logo-container">
                <img src={balletAndBooks.src} alt="Logo" className="logo-image" />
            </div>
            <ul className="nav-links">
                <li><a href="/Curriculum">Curriculum</a></li>
                <li><a href="/Students">Students</a></li>
                <li><a href="/Training">Training</a></li>
                <li><a href="/Documents">Documents</a></li>
                <li><a href="/Calendar">Calendar</a></li>
            </ul>
            <div className="profile-container">
                <span className="profile-name">YuFeng Lin :)</span>

                <div className="profile-picture">
                    {/* Profile picture placeholder */}
                </div>
            </div>
        </nav>
    );
};

export default Nav;