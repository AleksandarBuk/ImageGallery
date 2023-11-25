// AlbumDetail.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { album1, album2, album3, album4 } from './constants';
import styles, { layout } from '../style';

const AlbumDetail = () => {
  let { id } = useParams();
  let selectedAlbum = null;

  if (id === 'album1') {
    selectedAlbum = album1;
  } else if (id === 'album2') {
    selectedAlbum = album2;
  } else if (id === 'album3') {
    selectedAlbum = album3;
  } else if (id === 'album4') {
    selectedAlbum = album4;
  }

  const [selectedImage, setSelectedImage] = useState(selectedAlbum ? selectedAlbum[0] : null);

  if (!selectedAlbum) {
    return <div className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] flex justify-center items-center h-screen">Album not found</div>;
  }

  return (
    <div className={styles.albumDetailContainer}>
      {/* Main Image Display */}
      <div className={layout.albumMainImage}>
        {selectedImage && (
          <img src={selectedImage.imageUrl} alt={selectedImage.title} className="max-w-full max-h-full object-contain" />
        )}
      </div>

      {/* Thumbnail Bar */}
      <div className={layout.albumThumbnails}>
        {selectedAlbum.map((image) => (
          <img
            key={image.id}
            src={image.imageUrl}
            alt={image.title}
            className={styles.thumbnailImage}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default AlbumDetail;
