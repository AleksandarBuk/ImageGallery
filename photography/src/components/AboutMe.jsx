// Corrected About Me Component
import styles from '../style';
import { andjela_profile } from '../assets';

const AboutMe = () => (
  <div id="about-me" className={`${styles.flexCenter} ${styles.padding} ${styles.aboutMeBackground} paragraphMargin flex-col md:flex-row`}>
    <div className={`${styles.sectionImg} max-w-md mx-auto md:mx-0`}>
      <img src={andjela_profile} alt="Andjela" className="rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300" />
    </div>
    <div className={`${styles.boxWidth} text-center md:text-left md:ml-12`}>
      <h2 className={`${styles.heading2} `}>O meni</h2>
      <p className={`${styles.paragraph} my-4`}>
        <p>Zdravo! Ja sam Anđela, fotograf koji duboko voli da beleži lepotu u ljudima i trenucima. Moje putovanje je počelo kao hobi i razvilo se u sredstvo pripovedanja.
      </p>
      <p className={`${styles.paragraph} my-4`}>
        Specijalizovala sam se za portretnu, pejzažnu i uličnu fotografiju, donoseći jedinstvenu perspektivu svakom snimku. Težim da stvorim slike koje odjekuju emocijom i autentičnošću.
      </p>
      <p className={`${styles.paragraph} my-4`}>
        Iza objektiva, posvećena sam istraživanju novih tehnika i neprekidnom učenju. Verujem u magiju izlaska iz zone komfora i eksperimentisanja sa novim stilovima.
      </p>
      <p className={`${styles.paragraph} my-4`}>
        Bilo da zabeležim prolazni osmeh ili haotičnu lepotu urbanog života, moj cilj je da te scene oživim. Svaka fotografija je deo mog putovanja, i uzbuđena sam što ga mogu podeliti sa vama.</p>
      </p>
    </div>
  </div>
);

export default AboutMe;
