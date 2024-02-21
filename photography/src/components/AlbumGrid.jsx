import React from 'react';
import { Link } from 'react-router-dom';
import { albums } from './constants';

const AlbumGrid = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
      {albums.map((album) => (
        <Link key={album.id} to={`/album/${album.albumUrl}`} className="no-underline text-black group">
          <div className="relative border border-gray-200 shadow-sm hover:shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <img src={album.imageUrl} alt={album.title} className="w-full h-60 object-cover" />
            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition duration-500">
              <h3 className="text-lg font-semibold text-white">{album.title}</h3>
              <p className="text-sm text-gray-300">{album.dateCreated}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AlbumGrid;
