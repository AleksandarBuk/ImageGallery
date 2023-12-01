import React from 'react';
import styles from '../style';
import { about_me_selfie } from '../assets';

export const AboutMe = () => (
  <div className={`${styles.flexCenter} ${styles.padding}`}>
    <div className={`${styles.boxWidth}`}>
      <h2 className={styles.heading2}>About Me</h2>
      <p className={`${styles.paragraph} ${styles.padding_p_am}`}>
        Hello! I&apos;m Andjela, a passionate photographer with a deep love for capturing the beauty in people and moments. My journey with photography began as a hobby but quickly evolved into a profound means of storytelling and expression. I specialize in portrait, landscape, street photography, bringing a unique perspective to each shot.
      </p>

      <p className={`${styles.paragraph} ${styles.padding_p_am}`}>
        My philosophy revolves around the power of a photograph to not just preserve a moment, but to also evoke emotion and tell a story beyond words. With a keen eye for detail and a relentless pursuit of the perfect shot, I strive to create images that resonate with emotion and authenticity.
      </p>

      <div className={styles.selfieContainer}>
        <img src={about_me_selfie} alt="Selfie of Andjela" className={styles.selfieStyle} />
      </div>

      <p className={`${styles.paragraph} ${styles.padding_p_am}`}>
        Beyond the lens, I am deeply committed to continuous learning and exploring new techniques in photography. I believe in the magic that happens when you step out of your comfort zone, which is why I&apos;m always experimenting with new styles and approaches.
      </p>

      <p className={`${styles.paragraph} ${styles.padding_p_am}`}>
        Whether it&apos;s a fleeting smile, a serene landscape, or the chaotic beauty of urban life, my goal is to bring those scenes to life through my camera. Every photo I take is a piece of my journey, and I&apos;m excited to share it with you.
      </p>
    </div>
  </div>
);

export default AboutMe;
