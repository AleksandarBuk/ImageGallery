// AlbumDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { albums } from './constants';
import styles from '../style';

const AlbumDetail = () => {
  const { albumUrl } = useParams();
  const album = albums.find(album => album.albumUrl === albumUrl);
  const [selectedImage, setSelectedImage] = useState(album?.images[0]?.imageUrl);

  useEffect(() => {
    if (album) {
      document.title = album.title;
    }
  }, [album]);

  if (!album) {
    return <div>Album not found</div>;
  }

  return (
    <div className={`${styles.albumDetailBackground} fadeIn`}>
      <div className={`${styles.navBackground} fadeIn-05 text-3xl font-semibold mb-4 text-center`}>{album.title}</div>
      <div className={styles.navBackground}>
        <img src={selectedImage} alt="Selected" className="max-h-[80vh]" style={{ objectFit: 'contain' }} />
      </div>
      <div className="bottom-panel flex justify-center items-center mt-4 overflow-x-scroll" style={{ gap: '2px' }}>
        {album.images.map((image, index) => (
          <img
            key={index}
            src={image.imageUrl}
            alt={image.title}
            className={`album-thumbnail w-30 h-16 object-cover cursor-pointer ${selectedImage === image.imageUrl ? 'border-4 border-blue-500' : 'border border-transparent'}`}
            onClick={() => setSelectedImage(image.imageUrl)}
            style={{ marginRight: index !== album.images.length - 1 ? '10px' : '0', transition: 'border 0.3s ease' }}
          />
        ))}
      </div>
    </div>
  );
};

export default AlbumDetail;
