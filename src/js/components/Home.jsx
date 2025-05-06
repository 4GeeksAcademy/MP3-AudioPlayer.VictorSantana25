import React, { useEffect, useRef, useState } from 'react'
import AudioPlayer from './AudioPlayer'
import SongList from './SongList'

const Home = () => {
	const [songs, setSongs] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const audioRef = useRef(null);

	useEffect(() => {
		fetch("https://playground.4geeks.com/sound/songs")
			.then(res => res.json())
			.then(data => {
				console.log("Canciones cargadas:", data);
				setSongs(data.songs);
			})
			.catch(err => console.error("Error al obtener las canciones:", err));
	}, []);

	const playSong = (index) => {
		setCurrentIndex(index);
		audioRef.current.load();
		audioRef.current.play();
	};

	const playNext = () => {
		const nextIndex = (currentIndex + 1) % songs.length;
		playSong(nextIndex);
	};

	const playPrev = () => {
		const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
		playSong(prevIndex);
	};

	return (
		<div className="container mt-3">
			<h1 className="text-center">🎵 Reproductor MP3</h1>
			<SongList songs={songs} onPlay={playSong} />
			<AudioPlayer
				ref={audioRef}
				songUrl={songs[currentIndex] ? `https://playground.4geeks.com${songs[currentIndex].url}` : ""}
				onNext={playNext}
				onPrev={playPrev}
			/>
		</div>
	);
};

export default Home