'use client';
import React from 'react';
import Link from 'next/link';
import styles from './Nav.module.css';
import balletAndBooks from '../assets/logo.png.webp';

const mockUser = {
  name: "I'm an admin",
  role: 'admin', // change to 'parent' for testing
};

const Nav: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Link href="/home" className={styles.navLink}>
          <img src={balletAndBooks.src} alt="Logo" className={styles.logoImage} />
        </Link>
      </div>

      <ul className={styles.navLinks}>
        {mockUser.role === 'admin' && (
          <>
            <li><Link href="/curriculum" className={styles.navLink}>Curriculum</Link></li>
            <li><Link href="/students" className={styles.navLink}>Students</Link></li>
            <li><Link href="/training" className={styles.navLink}>Training</Link></li>
            <li><Link href="/documents" className={styles.navLink}>Documents</Link></li>
            <li><Link href="/calendar" className={styles.navLink}>Calendar</Link></li>
          </>
        )}

        {mockUser.role === 'parent' && (
          <>
            <li><Link href="/curriculum" className={styles.navLink}>Curriculum</Link></li>
            <li><Link href="/documents" className={styles.navLink}>Documents</Link></li>
            <li><Link href="/calendar" className={styles.navLink}>Calendar</Link></li>
          </>
        )}
      </ul>

      <div className={styles.profileContainer}>
        <Link href="/profile" className={styles.navLink}>
          <span className={styles.profileName}>{mockUser.name}</span>
          <div className={styles.profilePicture} />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
