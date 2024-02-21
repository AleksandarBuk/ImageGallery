// App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from './style';
import { Navbar, Hero, AboutMe, AlbumDetail, Overview, Footer} from './components'; // Ensure all components are imported correctly

export const App = () => {
  const [loadAnimation, setLoadAnimation] = useState(styles.fadeInScaleUp);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadAnimation('');
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className={`w-full overflow-hidden ${loadAnimation}`}>
        <div className={styles.navBackground}>
          <div className={styles.boxWidth}>
            <Navbar />
          </div>
        </div>

        <Routes>
          <Route path="/" element={
            <div className={styles.navBackground}>
              <div className={styles.boxWidth}>
                <Hero />
                <AboutMe />
                <Overview />
                <Footer />
              </div>
            </div>
          } />
          <Route path="/album/:albumUrl" element={<AlbumDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
