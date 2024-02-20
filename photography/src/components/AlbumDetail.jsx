// AlbumDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { albums } from './constants';
import styles from '../style';

const AlbumDetail = () => {
  const { albumUrl } = useParams();
  const album = albums.find(album => album.albumUrl === albumUrl);
  const [selectedImage, setSelectedImage] = useState(album?.images[0]?.imageUrl);

  // Set album name as page title
  useEffect(() => {
    if (album) {
      document.title = album.title;
    }
  }, [album]);

  if (!album) {
    return <div>Album not found</div>;
  }

  return (
    <div className={`${styles.albumDetailBackground}`}>
      {/* Centered album title */}
      <div className={`${styles.navBackground} text-3xl font-semibold mb-4 text-center`}> {album.title}</div>
      {/* Main panel for full-size image with colored background */}
      <div className={styles.navBackground}>
        <img src={selectedImage} alt="Selected" className="max-h-[80vh]" style={{ objectFit: 'contain' }} />
      </div>
      {/* Bottom panel for thumbnails, centered */}
      <div className="bottom-panel flex justify-center items-center mt-4 overflow-x-scroll" style={{ gap: '10px' }}>
        {album.images.map((image, index) => (
          <img
            key={index}
            src={image.imageUrl}
            alt={image.title}
            className={`album-thumbnail w-24 h-24 object-cover cursor-pointer ${selectedImage === image.imageUrl ? 'border-4 border-blue-500' : 'border border-transparent'}`}
            onClick={() => setSelectedImage(image.imageUrl)}
            style={{ marginRight: index !== album.images.length - 1 ? '10px' : '0', transition: 'border 0.3s ease' }}
          />
        ))}
      </div>
    </div>
  );
};

export default AlbumDetail;
