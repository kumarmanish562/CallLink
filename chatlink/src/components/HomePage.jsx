import React, { useCallback, useState } from 'react';
// Importing video & rocket icons from react-icons
import { FaRocket, FaVideo } from "react-icons/fa";
// Keypad icon
import { IoIosKeypad } from "react-icons/io";
// useNavigate hook for programmatic navigation
import { useNavigate } from 'react-router-dom';
// Custom Tailwind-based styles file
import styles from '../assets/dummyStyles';

const HomePage = () => {
  // State to store the room code entered by the user
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  // Function to handle "Join Room" button click
  const handleJoinRoom = useCallback(() => {
    if (value.trim()) {
      // Navigate to /room/:roomCode (dynamic route)
      navigate(`/room/${value}`);
    }
  }, [value, navigate]);

  // Function to allow pressing "Enter" key to join
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleJoinRoom();  
    }
  };

  return (
    <div className={styles.homePage.container}>
      {/* FLOATING BACKGROUND ANIMATED SHAPES */}
      <div className={styles.homePage.floatingContainer}>
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={styles.homePage.floatingElement}
            style={{
              width: `${Math.random() * 80 + 20}px`,       // random width 20px - 100px
              height: `${Math.random() * 80 + 20}px`,      // random height
              top: `${Math.random() * 100}%`,              // random vertical position
              left: `${Math.random() * 100}%`,             // random horizontal position
              animation: `float ${Math.random() * 15 + 10}s infinite ease-in-out`, // floating effect
              animationDelay: `${Math.random() * 5}s`,     // random delay for each
            }}
          />
        ))}
      </div>

      {/* MAIN CONTENT CARD */}
      <div className={styles.homePage.mainCard}>
        <div className={styles.homePage.cardInner}>
          <div className={styles.homePage.textCenter}>

            {/* ICON HEADER */}
            <div className={styles.homePage.iconContainer}>
              <div className={styles.homePage.iconWrapper}>
                <FaVideo className={styles.homePage.icon} />
              </div>
            </div>

            {/* Title & Subtitle */}
            <h1 className={styles.homePage.title}>
              Video Connect
            </h1>
            <p className={styles.homePage.subtitle}>
              Enter your room code to join the meeting
            </p>
          </div>

          {/* FORM SECTION */}
          <div className={styles.homePage.formContainer}>
            <div>
              <label htmlFor="roomCode" className={styles.homePage.label}>
                Room Code
              </label>

              {/* Input field with keypad icon */}
              <div className={styles.homePage.inputContainer}>
                <div className={styles.homePage.inputIconContainer}>
                  <IoIosKeypad className={styles.homePage.inputIcon} />
                </div>
                <input
                  id="room-code"
                  value={value}
                  onChange={(e) => setValue(e.target.value)} // update state
                  onKeyPress={handleKeyPress}               // allow pressing Enter
                  type="text"
                  placeholder="e.g. 123-456-789"
                  className={styles.homePage.input}
                />
              </div>
            </div>

            {/* Join Room Button */}
            <button
              onClick={handleJoinRoom}
              disabled={!value.trim()} // disable if no code entered
              className={`${styles.homePage.buttonBase} ${
                value.trim()
                  ? styles.homePage.buttonEnabled // green / active style
                  : styles.homePage.buttonDisabled // grey / inactive style
              }`}
            > 
              <FaRocket className={styles.homePage.buttonIcon} />
              <span className={styles.homePage.buttonText}>
                Join Room
              </span>
            </button>
          </div>
        </div>

        {/* FOOTER TEXT */}
        <div className={styles.homePage.footer}>
          <p className={styles.homePage.footerText}>
            Enter a room code to start your video conference.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
