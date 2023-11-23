import React from 'react';
import styles from '../style';

export const AboutMe = () => (
  <div className={`${styles.flexCenter} ${styles.padding}`}>
    <div className={`${styles.boxWidth}`}>
      <h2 className={styles.heading2}>About Me</h2>
      <p className={styles.paragraph}>
        {/* Bio goes here */}
        I am a passionate photographer with a love for capturing the beauty in people...
      </p>
      {/* Add more content as needed */}
    </div>
  </div>
);

export default AboutMe;
