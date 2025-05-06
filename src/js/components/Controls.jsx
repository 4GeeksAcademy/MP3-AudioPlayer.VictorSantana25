import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const Controls = ({ onPlay, onPause, onNext, onPrev }) => {
  return (
    <ButtonGroup>
      <Button variant="light" onClick={onPrev}>⏮ Anterior</Button>
      <Button variant="light" onClick={onPlay}>▶️ Reproducir</Button>
      <Button variant="light" onClick={onPause}>⏸ Pausar</Button>
      <Button variant="light" onClick={onNext}>⏭ Siguiente</Button>
    </ButtonGroup>
  );
};

export default Controls;
