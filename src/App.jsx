import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Hero, AlbumDetail, AboutMe, Footer, Contact } from './components';

export const App = () => {
  const [loadAnimation, setLoadAnimation] = useState('fadeInScaleUp');

  useEffect(() => {
    // Set a timeout to remove the animation class after it's done
    const timer = setTimeout(() => {
      setLoadAnimation('');
    }, 1000); // The timeout duration should match the animation duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className={`w-full overflow-hidden ${loadAnimation}`}> {/* Apply the loadAnimation state here */}
        <div className={`px-6 py-4 flex justify-center bg-gradient-to-r from-gray-500 to-gray-800`}>
          <div className="xl:max-w-[1280px] w-full">
            <Navbar />
          </div>
        </div>

        <Routes>
          <Route path="/" element={
            <div className="flex justify-center items-start bg-gradient-to-r from-gray-500 to-gray-800">
              <div className="xl:max-w-[1280px] w-full">
                <Hero />
                <AboutMe />
                <Contact />
                <Footer />
              </div>
            </div>
          } />
          <Route path="album/:id" element={<AlbumDetail />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="contact" element={<Contact />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
