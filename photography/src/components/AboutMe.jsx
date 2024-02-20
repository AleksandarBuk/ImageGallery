// Corrected About Me Component
import styles from '../style';
import { andjela_profile } from '../assets';

const AboutMe = () => (
  <div id="about-me" className={`${styles.flexCenter} ${styles.padding} ${styles.aboutMeBackground} paragraphMargin flex-col md:flex-row`}>
    <div className={`${styles.sectionImg} max-w-md mx-auto md:mx-0`}>
      <img src={andjela_profile} alt="Andjela" className="rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300" />
    </div>
    <div className={`${styles.boxWidth} text-center md:text-left md:ml-12`}>
      <h2 className={`${styles.heading2} `}>About Me</h2>
      <p className={`${styles.paragraph} my-4`}>
        Hello! I&apos;m Andjela, a passionate photographer with a deep love for capturing beauty in people and moments. My journey began as a hobby and evolved into a means of storytelling.
      </p>
      <p className={`${styles.paragraph} my-4`}>
        I specialize in portrait, landscape, and street photography, bringing a unique perspective to each shot. I strive to create images that resonate with emotion and authenticity.
      </p>
      <p className={`${styles.paragraph} my-4`}>
        Beyond the lens, I am committed to exploring new techniques and continuously learning. I believe in the magic of stepping out of your comfort zone and experimenting with new styles.
      </p>
      <p className={`${styles.paragraph} my-4`}>
        Whether capturing a fleeting smile or the chaotic beauty of urban life, my goal is to bring those scenes to life. Every photo is a piece of my journey, and I'm excited to share it with you.
      </p>
    </div>
  </div>
);

export default AboutMe;
