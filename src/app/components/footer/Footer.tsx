'use client';

import styles from './Footer.module.css';
import { HiLocationMarker, HiMail } from 'react-icons/hi';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContact} dir="ltr">
          <div className={styles.contactItem}>
            <HiLocationMarker className={styles.icon} />
            <span>PA / NJ — Worldwide</span>
          </div>
          <div className={styles.contactItem}>
            <HiMail className={styles.icon} />
            <a href="mailto:akhalid200311@gmail.com" className={styles.emailLink}>
              akhalid200311@gmail.com
            </a>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Abdullah Khalid. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

