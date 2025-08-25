// src/components/Navbar.jsx
import React from 'react';
// Importing logo image
import Logo from '../assets/logo.png';
// Importing arrow icon
import { MdArrowForward } from 'react-icons/md';
// React Router's Link for navigation
import { Link } from 'react-router-dom';
// Tailwind-based custom styles
import styles from '../assets/dummystyles';

const Navbar = () => {
  return (
    <nav className={styles.navbar.nav}>
      <div className={styles.navbar.outerDiv}>
        <div className={styles.navbar.innerDiv}>

          {/* LEFT SECTION: Logo that links to homepage */}
          <Link to="/" className={styles.navbar.logoLink}>
            <img
              src={Logo}                        // logo image source
              alt="Hexagon Logo"                 // accessibility alt text
              className={styles.navbar.logoImg}  // style class for sizing
            />
          </Link>

          {/* CENTER SECTION: Title + Animated Dots */}
          <div className={styles.navbar.centerContainer}>
            <h1 className={styles.navbar.title}>
              CHATLINK
            </h1>

            {/* Animated Dots below the title */}
            <div className={styles.navbar.dotsContainer}>
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={styles.navbar.dot}
                  style={{
                    animationDelay: `${i * 0.1}s`,                  // each dot appears with delay
                    boxShadow: '0 0 4px rgba(245, 158, 11, 0.5)',   // glowing yellowish shadow
                  }}
                />
              ))}
            </div>
          </div>

          {/* RIGHT SECTION: "Connect" Button linking to LinkedIn */}
          <div>
            <a
              href="https://www.linkedin.com/in/kumarmanish562/"  // external link
              target="_blank"                                     // opens in new tab
              className={styles.navbar.buttonWrapper}
            >
              {/* Background / hover effect layer */}
              <div className={styles.navbar.buttonAbsoluteDiv} />

              {/* Actual button */}
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
