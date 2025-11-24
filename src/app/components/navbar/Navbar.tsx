'use client';

import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <span>Abdullah Khalid</span>
          </div>
          
          {/* Desktop Navigation */}
          <ul className={styles.navLinks}>
            <li>
              <button onClick={() => scrollToSection('hero')}>HOME</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('work')}>WORK</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('gallery')}>GALLERY</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('about')}>ABOUT</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')} className={styles.contactBtn}>CONTACT</button>
            </li>
          </ul>

          {/* Hamburger Menu Button */}
          <button 
            className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.menuOpen : ''}`}>
        <div className={styles.mobileMenuContent}>
          <button onClick={() => scrollToSection('hero')} className={styles.mobileNavBtn}>
            HOME
          </button>
          <button onClick={() => scrollToSection('work')} className={styles.mobileNavBtn}>
            WORK
          </button>
          <button onClick={() => scrollToSection('gallery')} className={styles.mobileNavBtn}>
            GALLERY
          </button>
          <button onClick={() => scrollToSection('about')} className={styles.mobileNavBtn}>
            ABOUT
          </button>
          <button onClick={() => scrollToSection('contact')} className={styles.mobileContactBtn}>
            CONTACT
          </button>
        </div>
      </div>

      {/* Backdrop */}
      {isMenuOpen && (
        <div className={styles.backdrop} onClick={() => setIsMenuOpen(false)}></div>
      )}
    </>
  );
}

