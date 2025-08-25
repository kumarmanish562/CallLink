import React from 'react'
// Importing social media icons from react-icons
import { FaInstagram, FaLinkedinIn, FaDiscord } from 'react-icons/fa'
// Importing logo image
import Logo from '../assets/logo.png'
// Importing custom styles (tailwind classnames stored in dummyStyles.js)
import styles from '../assets/dummyStyles'

// Functional Footer component
const Footer = () => (
  <footer className={styles.footer.footer}>
    {/* ================= MAIN FOOTER CONTENT ================= */}
    <div className={styles.footer.mainContainer}>
      {/* Grid Layout - contains Left, Center, Right sections */}
      <div className={`${styles.footer.gridContainer} items-center`}>

        {/* -------- LEFT SECTION: Logo + Title -------- */}
        <div className={`${styles.footer.leftContainer} col-span-1`}>
          <div className={styles.footer.logoContainer}>
            {/* Website logo */}
            <img
              src={Logo}
              alt="ChatLink Logo"
              className={styles.footer.logoImg}
            />
            {/* Brand name */}
            <h2 className={styles.footer.logoTitle}>
              CHATLINK
            </h2>
          </div>
        </div>

        {/* -------- CENTER SECTION: Card Info -------- */}
        <div className="flex flex-col items-center col-span-1">
          <div className={styles.footer.card}>
            {/* Title with badge */}
            <h3 className={styles.footer.cardTitle}>
              <span className={styles.footer.badge}>NEW</span>
              Powered by ZEGOCLOUD
            </h3>
            {/* Description text */}
            <p className={styles.footer.cardText}>
              Seamless one-to-one video calls with crystal clear audio and ultra-low latency.
            </p>
            {/* Call-to-action button */}
            <button className={styles.footer.cardButton}>
              <a href='https://www.zegocloud.com/'>Try Free Demo</a>
            </button>
          </div>
        </div>

        {/* -------- RIGHT SECTION: Social Links & Contact -------- */}
        <div className={`${styles.footer.rightContainer} col-span-1`}>

          {/* --- Social Media Links --- */}
          <div className={styles.footer.socialContainer}>
            <h3 className={styles.footer.socialTitle}>Connect With Us</h3>
            <div className={styles.footer.socialIcons}>
              {/* Discord */}
              <a href="https://discord.com/channels/@me" className={styles.footer.discordIcon}>
                <FaDiscord size={20} />
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/itz_kumar_manish_561/?next=%2F&hl=en" className={styles.footer.instagramIcon}>
                <FaInstagram size={20} />
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/kumarmanish562/" className={styles.footer.linkedinIcon}>
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>

          {/* --- Contact Info --- */}
          <div className={styles.footer.contactContainer}>
            <h4 className={styles.footer.contactTitle}>Contact Us</h4>
            <p className={styles.footer.contactText}>qmanishkumar562@gmail.com</p>
            <p className={styles.footer.contactText}>+91 8872825483</p>
          </div>
        </div>
      </div>
    </div>

    {/* ================= COPYRIGHT SECTION ================= */}
    <div className={styles.footer.copyrightContainer}>
      <div className={styles.footer.copyrightInner}>
        {/* Dynamic current year */}
        <p className={styles.footer.copyrightText}>
          © {new Date().getFullYear()} All rights reserved.
        </p>
        {/* Designer credit */}
        <p className={styles.footer.designerText}>
          Designed by{' '}
          <a
            href="https://github.com/kumarmanish562"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footer.designerLink}
          >
            CHATLINK
          </a>
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
