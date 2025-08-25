import React from 'react'
import { FaInstagram, FaLinkedinIn, FaDiscord } from 'react-icons/fa'
import Logo from '../assets/Logo.png'
import styles from '../assets/dummyStyles'

const Footer = () => (
  <footer className={styles.footer.footer}>
    {/* Main Footer */}
    <div className={styles.footer.mainContainer}>
      <div className={`${styles.footer.gridContainer} items-center`}>
        {/* Left: Logo & Title */}
        <div className={`${styles.footer.leftContainer} col-span-1`}>
          <div className={styles.footer.logoContainer}>
            <img
              src={Logo}
              alt="ChatLink Logo"
              className={styles.footer.logoImg}
            />
            <h2 className={styles.footer.logoTitle}>
              CHATLINK
            </h2>
          </div>
        </div>

        {/* Center: Card */}
        <div className="flex flex-col items-center col-span-1">
          <div className={styles.footer.card}>
            <h3 className={styles.footer.cardTitle}>
              <span className={styles.footer.badge}>NEW</span>
              Powered by ZEGOCLOUD
            </h3>
            <p className={styles.footer.cardText}>
              Seamless one-to-one video calls with crystal clear audio and ultra-low latency.
            </p>
            <button className={styles.footer.cardButton}>
              <a href='https://www.zegocloud.com/'>Try Free Demo</a>
            </button>
          </div>
        </div>

        {/* Right: Social & Contact */}
        <div className={`${styles.footer.rightContainer} col-span-1`}>
          <div className={styles.footer.socialContainer}>
            <h3 className={styles.footer.socialTitle}>Connect With Us</h3>
            <div className={styles.footer.socialIcons}>
              <a href="https://discord.com/channels/@me" className={styles.footer.discordIcon}>
                <FaDiscord size={20} />
              </a>
              <a href="https://www.instagram.com/itz_kumar_manish_561/?next=%2F&hl=en" className={styles.footer.instagramIcon}>
                <FaInstagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/kumarmanish562/" className={styles.footer.linkedinIcon}>
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
          <div className={styles.footer.contactContainer}>
            <h4 className={styles.footer.contactTitle}>Contact Us</h4>
            <p className={styles.footer.contactText}>qmanishkumar562@gmail.com</p>
            <p className={styles.footer.contactText}>+91 8872825483</p>
          </div>
        </div>
      </div>
    </div>

    {/* Copyright */}
    <div className={styles.footer.copyrightContainer}>
      <div className={styles.footer.copyrightInner}>
        <p className={styles.footer.copyrightText}>
          © {new Date().getFullYear()} All rights reserved.
        </p>
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