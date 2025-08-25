// src/components/Navbar.jsx
import React from 'react';
import Logo from '../assets/Logo.png';
import { MdArrowForward } from 'react-icons/md';
import { Link } from 'react-router-dom';
import styles from '../assets/dummyStyles';

const Navbar = () => {
  return (
    <nav className={styles.navbar.nav}>
      <div className={styles.navbar.outerDiv}>
        <div className={styles.navbar.innerDiv}>
          {/* Left: Logo */}
          <Link to="/" className={styles.navbar.logoLink}>
            <img
              src={Logo}
              alt="Hexagon Logo"
              className={styles.navbar.logoImg}
            />
          </Link>

          {/* Center: Animated Title */}
          <div className={styles.navbar.centerContainer}>
            <h1 className={styles.navbar.title}>
              CHATLINK
            </h1>
            <div className={styles.navbar.dotsContainer}>
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={styles.navbar.dot}
                  style={{
                    animationDelay: `${i * 0.1}s`,
                    boxShadow: '0 0 4px rgba(245, 158, 11, 0.5)',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right: Connect Button */}
          <div>
            <a
              href="https://www.zegocloud.com/talk?contact_source=index"
              target="_blank"
              className={styles.navbar.buttonWrapper}
            >
              <div className={styles.navbar.buttonAbsoluteDiv} />
              <button className={styles.navbar.button}>
                <span className="mr-2">CONNECT</span>
                <MdArrowForward className={styles.navbar.buttonIcon} />
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;