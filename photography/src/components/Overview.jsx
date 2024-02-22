import styles from "../style";

const Overview = () => (
  <section className={`${styles.fadeIn} grid sm:grid-cols-2 grid-cols-1 gap-4 py-10 px-5`}>
    <div className={`${styles.aboutMeBackground}`}>
      <h2 className={`${styles.heading2} paragraphMargin`}>Approach</h2>
      <p className="paragraphMargin paragraphPadding">I approach each project by merging my creative vision with technical precision, carefully planning shots and mastering lighting and composition to translate the client's goals into impactful visual narratives.</p>
    </div>
    
    <div className={`${styles.aboutMeBackground}`}>
      <h2 className={`${styles.heading2} paragraphMargin`}>Overview</h2>
      <p className="paragraphMargin paragraphPadding">By staying at the forefront of photographic trends and techniques, I ensure each photograph is a testament to quality, creativity, and emotional depth.</p>
    </div>
  </section>
);

export default Overview;
