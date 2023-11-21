import React from "react";
import audio from '../assets/audio.mp3';
import useSound from 'use-sound';
import PlayButton from 'use-sound';



function Audio() {
    const soundUrl = audio;

  const [play, { stop, isPlaying }] = useSound(soundUrl);

  return (
    <PlayButton
      active={isPlaying}
      size={60}
      iconColor="var(--color-background)"
      idleBackgroundColor="var(--color-text)"
      activeBackgroundColor="var(--color-primary)"
      play={play}
      stop={stop}
    />
  );
}

export default Audio;