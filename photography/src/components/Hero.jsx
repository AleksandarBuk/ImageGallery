// Hero.jsx
import React, { useState, useEffect } from 'react';
import { A3 } from '../assets'; // Make sure this import path is correct
import styles from '../style.js';
import AlbumGrid from './AlbumGrid.jsx'; // Ensure this is the correct path

const Hero = () => {
    const [showAlbums, setShowAlbums] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowAlbums(true), 0);
        return () => clearTimeout(timer);
    }, []);

    const albumGridStyle = { opacity: showAlbums ? 1 : 0, transition: 'opacity 1s ease-in-out' };

    return (
        <div className={`${styles.flexCenter} ${styles.backgroundBorder} min-h-screen bg-cover bg-center zoomInBackground`} style={{ backgroundImage: `url(${A3})` }}>
            <div className={`${styles.flexCenter} bg-opacity-50 w-full h-full`}>
                <div className={`${styles.boxWidth} flex flex-col items-center`}>
                    <h1 className={`${styles.heading2} welcomeText slideInLeft mb-8`}>Welcome to Andjela Photography</h1>
                    <div id="album-grid" className="w-full" style={albumGridStyle}>
                        <AlbumGrid />
                        <p style={{ textAlign: 'center', fontStyle: 'italic', marginTop: '20px', color: 'white', fontSize: '20px' }}>
                            Check out my album collection <span className="jumpingArrow">↑</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Hero;
