// Updated About Me Component without pink color and with center alignment
import styles from '../style';
import { andjela_selfie } from '../Assets';

const AboutMe = () => (
  <div className={`${styles.flexCenter} ${styles.padding} flex-col md:flex-row justify-center items-center`}>
    <div className={`${styles.sectionImg} max-w-md mx-auto md:mx-0`}>
      <img src={andjela_selfie} alt="Andjela" className="rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300" />
    </div>
    <div className={`${styles.boxWidth} text-center md:ml-12`}>
      <h2 className={`${styles.heading2} text-gradient bg-gradient-to-r from-blue-500 to-teal-500`}>About Me</h2>
      <p className={`${styles.paragraph} my-4`}>
        Hello! I&apos;m Andjela, a passionate photographer with a deep love for capturing beauty in people and moments. My journey began as a hobby and evolved into a means of storytelling.
      </p>
      <p className={`${styles.paragraph} my-4`}>
        I specialize in portrait, landscape, and street photography, bringing a unique perspective to each shot. I strive to create images that resonate with emotion and authenticity.
      </p>
      <p className={`${styles.paragraph} my-4`}>
        Beyond the lens, I am committed to exploring new techniques and continuously learning. I believe in the magic of stepping out of your comfort zone and experimenting with new styles.
      </p>
      <p className={`${styles.paragraph} my-4 text-color`}>
        Whether capturing a fleeting smile or the chaotic beauty of urban life, my goal is to bring those scenes to life. Every photo is a piece of my journey, and I&apos;m excited to share it with you.
      </p>
    </div>
  </div>
);

export default AboutMe;
