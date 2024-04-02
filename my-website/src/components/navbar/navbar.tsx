import React, { useState } from 'react';
import styles from './navbar.module.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.imageContainer}>
                <img src='https://st3.depositphotos.com/27847728/35061/v/600/depositphotos_350619152-stock-illustration-creative-letter-logo-vector-template.jpg' className={styles.logo} />
                <p>Vinay Jujjuri</p>
            </div>
            <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
                &#9776;
            </button>
            <ul className={`${styles.navLinks} ${isOpen ? styles.showMenu : ''}`}>
                <li className={styles.navItem} onClick={() => setIsOpen(false)}>
                    Home
                </li>
                <li className={styles.navItem} onClick={() => setIsOpen(false)}>
                    About
                </li>
                <li className={styles.navItem} onClick={() => setIsOpen(false)}>
                    Contact
                </li>
                <li className={styles.navItem} onClick={() => setIsOpen(false)}>
                    Follow me
                </li>
            </ul>
        </nav>
    );
};
