import React from 'react';
import { Link } from 'react-router-dom';
import { albums } from './constants';

const AlbumGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
      {albums.map((album) => (
        <Link key={album.id} to={`/album/${album.albumUrl}`} className="no-underline text-black group">
          <div className="relative border border-gray-200 transform transition duration-500 hover:scale-105 hover:border-blue-500">
            <img src={album.imageUrl} alt={album.title} className="w-full h-auto" />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-500">
              <h3 className="text-xl font-semibold text-white">{album.title}</h3>
              <p className="text-gray-300">{album.dateCreated}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AlbumGrid;
