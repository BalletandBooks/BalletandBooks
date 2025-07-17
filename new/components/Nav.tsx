'use client';
import React from 'react';
import Link from 'next/link';
import '../src/app/globals.css'; // Adjust the path as necessary
import balletAndBooks from '../assets/logo.png.webp';

const mockUser = {
  name: "I'm an admin",
  role: 'admin', // change to 'admin' for testing
};

const Nav: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link href="/home">
          <img src={balletAndBooks.src} alt="Logo" className="logo-image" />
        </Link>
      </div>

      <ul className="nav-links">
        {mockUser.role === 'admin' && (
          <>
            <li><Link href="/curriculum">Curriculum</Link></li>
            <li><Link href="/students">Students</Link></li>
            <li><Link href="/training">Training</Link></li>
            <li><Link href="/documents">Documents</Link></li>
            <li><Link href="/calendar">Calendar</Link></li>
          </>
        )}

        {mockUser.role === 'parent' && (
          <>
            <li><Link href="/curriculum">Curriculum</Link></li>
            <li><Link href="/documents">Documents</Link></li>
            <li><Link href="/calendar">Calendar</Link></li>
          </>
        )}
      </ul>

      <div className="profile-container">
        <Link href="/profile">
          <span className="profile-name">{mockUser.name}</span>
          <div className="profile-picture" />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
