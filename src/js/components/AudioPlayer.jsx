import React, { forwardRef } from 'react';
import Controls from './Controls';

const AudioPlayer = forwardRef(({ songUrl, onNext, onPrev }, ref) => {
  return (
    <div
      className="bg-dark text-white p-3 d-flex justify-content-center align-items-center"
      style={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
    >
      <Controls
        onPlay={() => ref.current.play()}
        onPause={() => ref.current.pause()}
        onNext={onNext}
        onPrev={onPrev}
      />
      <audio ref={ref}>
        <source src={songUrl} type="audio/mpeg" />
        Tu navegador no soporta audio.
      </audio>
    </div>
  );
});

export default AudioPlayer;

