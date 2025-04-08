'use client';
import React from 'react';
import '../src/app/globals.css'; // Adjust the path as necessary
import balletAndBooks from '../assets/logo.png.webp';

const mockUser = {
  name: 'I\'m a parent',
  role: 'parent', // change to 'admin' for testing
};

const Nav: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={balletAndBooks.src} alt="Logo" className="logo-image" />
      </div>

      <ul className="nav-links">
        {mockUser.role === 'admin' && (
          <>
            <li><a href="/curriculum">Curriculum</a></li>
            <li><a href="/students">Students</a></li>
            <li><a href="/training">Training</a></li>
            <li><a href="/documents">Documents</a></li>
            <li><a href="/calendar">Calendar</a></li>
          </>
        )}

        {mockUser.role === 'parent' && (
          <>
            <li><a href="/curriculum">Curriculum</a></li>
            <li><a href="/documents">Documents</a></li>
            <li><a href="/calendar">Calendar</a></li>
          </>
        )}
      </ul>

    <div className="profile-container">
      <a href="/profile">
        <span className="profile-name">{mockUser.name}</span>
        <div className="profile-picture" />
      </a>
    </div>
    </nav>
  );
};

export default Nav;
