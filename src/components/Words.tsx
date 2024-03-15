import React from 'react';
import styles from '../styles/design.module.css'; // Import CSS module

const Words: React.FC = () => {
  return (
    <div className={styles.words}>
        <p className={styles.hello}>Hello!</p>
        <p className={styles.second}>Are you looking for a platform to share your art?</p>
        <p className={styles.third}>Then you are in a right place! Discover and share the world's best photos with us.</p>
        <a href="/login"><button>Get Started</button></a>
    </div>
  );
};

export default Words;