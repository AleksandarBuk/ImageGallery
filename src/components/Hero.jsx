import React from 'react'
import AlbumGrid from './AlbumGrid'
import styles from '../style';

const Hero = () => {
  return (
    <section>
      <div className={`${styles.boxWidth}`}>
        <p className={styles.paragraph}>Collections:</p>
      </div>
      <div className={styles.flexCenter}>
          <AlbumGrid />
      </div>
    </section>
  )
}

export default Hero;