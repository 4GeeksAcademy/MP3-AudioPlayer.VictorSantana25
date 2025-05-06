import React from 'react';

const SongList = ({ songs, onPlay }) => {
    if (!Array.isArray(songs)) return <p>No hay canciones disponibles.</p>;
  
    return (
      <ul className="list-group">
        {songs.map((song, index) => (
          <li
            key={song.id}
            className="list-group-item"
            onClick={() => onPlay(index)}
          >
            {song.name}
          </li>
        ))}
      </ul>
    );
  };

export default SongList;
