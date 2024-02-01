import { useState, useEffect } from 'react';
import { A3 } from '../Assets/index.js';
import Album from './Album';
import styles from '../style.js';

const Hero = () => {
    const [showAlbums, setShowAlbums] = useState(false);

    useEffect(() => {
        // Delay showing the albums by 0.5 seconds
        const timer = setTimeout(() => {
            setShowAlbums(true);
        }, 200);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    const albumGridStyle = {
        opacity: showAlbums ? 1 : 0,
        transition: 'opacity 1s ease-in-out',
    };

    return (
        <div
            className={`${styles.flexCenter} min-h-screen bg-cover bg-center`}
            style={{ backgroundImage: `url(${A3})` }}
        >
            <div className={`${styles.flexCenter} bg-opacity-50 w-full h-full`}>
                <div className={`${styles.boxWidth} flex flex-col items-center`}>
                    <h1 className={`${styles.heading1} ${styles.welcomeText} ${styles.slideInLeft} mb-8`}>
                        Welcome to the Gallery
                    </h1>
                    <div id="album-grid" className="w-full" style={albumGridStyle}>
                        <Album /> {/* Render the Album component here */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
