import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { albums } from './constants';
import styles from '../style';

const AlbumDetail = () => {
  const { albumUrl } = useParams();
  const album = albums.find(album => album.albumUrl === albumUrl);
  const [selectedImage, setSelectedImage] = useState(album?.images[0]?.imageUrl);
  const thumbnailsRef = useRef(null);

  useEffect(() => {
    if (album) {
      document.title = album.title;
    }
    if (thumbnailsRef.current) {
      thumbnailsRef.current.scrollLeft = 0;
    }
  }, [album]);

  if (!album) {
    return <div>Album nije pronadjen</div>;
  }

  return (
    <div className={`${styles.albumDetailBackground} fadeIn`}>
      <div className={`fadeIn-05 text-3xl font-semibold mb-4 text-center`}>{album.title}</div>
      <div className={`${styles.navBackground} px-4 md:px-8 lg:px-12`}>
        <img src={selectedImage} alt="Selected" className="h-[300px] md:h-[500px] w-full object-contain mx-auto" />
      </div>
      <div ref={thumbnailsRef} className="bottom-panel flex justify-start items-center mt-4 overflow-x-scroll space-x-2 px-2 sm:px-4 md:px-8 lg:px-12">
        {album.images.map((image, index) => (
          <img
            key={index}
            src={image.imageUrl}
            alt={image.title}
            className={`album-thumbnail h-12 md:h-16 w-auto object-cover cursor-pointer ${selectedImage === image.imageUrl ? 'border-4 border-blue-500' : 'border border-transparent'}`}
            onClick={() => setSelectedImage(image.imageUrl)}
          />
        ))}
      </div>
    </div>
  );
};

export default AlbumDetail;
