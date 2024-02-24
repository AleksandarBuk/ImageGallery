import styles from "../style";

const Overview = () => (
  <section className={`${styles.fadeIn} grid sm:grid-cols-2 grid-cols-1 gap-4 py-10 px-5`}>
    <div className={`${styles.aboutMeBackground} hover:shadow-lg hover:border-blue-500 border-2 border-transparent transition-all`}>
      <h2 className={`${styles.heading2} paragraphMargin`}>Approach</h2>
      <p className="paragraphMargin paragraphPadding">Pristupam svakom projektu spajanjem moje kreativne vizije sa tehničkom preciznošću, pažljivo planirajući snimke, ovladavajući osvetljenjem i kompozicijom kako bih provela ciljeve klijenta u snažne vizuelne narative.</p>
    </div>
    
    <div className={`${styles.aboutMeBackground} hover:shadow-lg hover:border-blue-500 border-2 border-transparent transition-all`}>
      <h2 className={`${styles.heading2} paragraphMargin`}>Overview</h2>
      <p className="paragraphMargin paragraphPadding">Ostajući u prvom planu fotografskih trendova i tehnika, osiguravam da je svaka fotografija dokaz kvaliteta, kreativnosti i emocionalne dubine.</p>
    </div>
  </section>
);

export default Overview;
