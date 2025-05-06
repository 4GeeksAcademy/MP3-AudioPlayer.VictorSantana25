import React from 'react';
import { ListGroup } from 'react-bootstrap';

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
