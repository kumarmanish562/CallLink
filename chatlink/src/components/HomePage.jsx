import React, {  useCallback, useState } from 'react'
import { FaRocket, FaVideo } from "react-icons/fa";
import {IoIosKeypad} from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import styles from '../assets/dummyStyles'

const HomePage = () => {
  const[value, setValue] = useState('');
  const navigate = useNavigate();
  const handleJoinRoom = useCallback(() => {
    if (value.trim()) {
      navigate(`/room/${value}`);
    }
  }, [value, navigate]);
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleJoinRoom()  
    }
  };
  return (
    <div className={styles.homePage.container}>
            <div className={styles.homePage.floatingContainer}>
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className={styles.homePage.floatingElement}
                        style={{
                            width: `${Math.random() * 80 + 20}px`,
                            height: `${Math.random() * 80 + 20}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `float ${Math.random() * 15 + 10}s infinite ease-in-out`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
            </div>

            {/* MAIN CONTENT */}
            <div className={styles.homePage.mainCard}>
              <div className={styles.homePage.cardInner}>
                <div className={styles.homePage.textCenter}>

                  {/* ANIMATED ICON */}
                  <div className={styles.homePage.iconContainer}>
                    <div className={styles.homePage.iconWrapper}>
                      <FaVideo className={styles.homePage.icon} />
                    </div>
                  </div>
                    <h1 className={styles.homePage.title }>
                      Video Connect
                    </h1>
                    <p className={styles.homePage.subtitle}>
                      Enter your room code to join the meeting
                    </p>
                </div>

                <div className={styles.homePage.formContainer}>
                  <div>
                    <label htmlFor="roomCode" className={styles.homePage.label}>
                      Room Code
                      </label>
                      <div className={styles.homePage.inputContainer}>
                        <div className={styles.homePage.inputIconContainer}>
                          <IoIosKeypad className={styles.homePage.inputIcon} />
                        </div>
                        <input id='room-code' value={value} onChange={(e) => setValue(e.target.value)} 
                        onKeyPress={handleKeyPress} type='text' placeholder='e.g. 123-456-789' 
                        className={styles.homePage.input}/>
                      </div>
                  </div>

                  <button onClick={handleJoinRoom} disabled={!value.trim()} 
                  className={`${styles.homePage.buttonBase} ${value.trim() 
                  ? styles.homePage.buttonEnabled : styles.homePage.buttonDisabled}`}> 
                  <FaRocket className={styles.homePage.buttonIcon} />
                  <span className={styles.homePage.buttonText}>
                    Join Room
                    </span>
                  </button>
                </div>
              </div>

              <div className={styles.homePage.footer}>
                <p className={styles.homePage.footerText}>
                  Enter a room code to start your video conference.
                </p>
              </div>
            </div>
            </div>

  )
}

export default HomePage