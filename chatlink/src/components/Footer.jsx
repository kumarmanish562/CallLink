// src/components/Footer.jsx
import React from 'react'
import { FaFacebookF, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa'
import Logo from '../assets/Logo.png'
import styles from '../assets/dummyStyles'

const Footer = () => (
    <footer className={styles.footer.footer}>
        {/* Main Footer */}
        <div className={styles.footer.mainContainer}>
            <div className={styles.footer.gridContainer}>

                {/* Left: Logo & Title */}
                <div className={styles.footer.leftContainer}>
                    <div className={styles.footer.logoContainer}>
                        <img
                            src={Logo}
                            alt="Hexagon Logo"
                            className={styles.footer.logoImg}
                        />
                        <h2 className={styles.footer.logoTitle}>
                            Manish Kumar
                        </h2>
                    </div>

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

                <div className={styles.footer.centerContainer}/>
                   
              

                {/* Right: Social & Contact */}
                <div className={styles.footer.rightContainer}>
                    <div className={styles.footer.socialContainer}>
                        <h3 className={styles.footer.socialTitle}>Connect With Us</h3>
                        <div className={styles.footer.socialIcons}>
                            <a href="https://www.facebook.com/profile.php?id=61567156598660" className={styles.footer.facebookIcon}>
                                <FaFacebookF size={20} />
                            </a>
                            <a href="https://www.instagram.com/hexagondigitalservices?igsh=MWp2NG1oNTlibWVnZA==" className={styles.footer.instagramIcon}>
                                <FaInstagram size={20} />
                            </a>
                            <a href="https://youtube.com/@hexagondigitalservices?si=gqWYQAOUVbEPbJmR" className={styles.footer.youtubeIcon}>
                                <FaYoutube size={20} />
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