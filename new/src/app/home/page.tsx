import React from 'react';
import Link from 'next/link';
const NavBar: React.FC = () => {
    return (
        <nav style={styles.nav}>
            <ul style={styles.ul}>
                <li style={styles.li}><a href="#home" style={styles.a}>Home</a></li>
                <li style={styles.li}><a href="#about" style={styles.a}>About</a></li>
                <li style={styles.li}><a href="#services" style={styles.a}>Services</a></li>
                <li style={styles.li}><a href="#contact" style={styles.a}>Contact</a></li>
                <li style={styles.li}><Link href="/calendar"><a style={styles.a}>Calendar</a></Link></li>
            </ul>
        </nav>
    );
};

const styles = {
    nav: {
        backgroundColor: '#333',
        padding: '1rem',
    },
    ul: {
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'space-around',
    },
    li: {
        display: 'inline',
    },
    a: {
        color: 'white',
        textDecoration: 'none',
        padding: '0.5rem 1rem',
        display: 'block',
    },
};

export default NavBar;