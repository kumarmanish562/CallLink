import React from 'react'
import styles from '../assets/dummystyles'

const HomePage = () => {
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
            </div>

  )
}

export default HomePage