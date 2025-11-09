import { useEffect, useRef, useState } from "react";

export default function useAudioPlayer() {
  const audioRef = useRef(new Audio());
  const [songs, setSongs] = useState([
    {
      id: "demo",
      title: "Demo Track",
      artist: "VibeFlow",
      src: "",
      cover: "/default-cover.svg",
    },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    audio.src = songs[currentIndex]?.src || "";
    audio.onended = () => {
      if (repeat) audio.play();
      else handleNext();
    };
    if (isPlaying) audio.play().catch(() => { });
    else audio.pause();
  }, [currentIndex, isPlaying, songs, repeat]);

  const handlePlayPause = () => setIsPlaying((p) => !p);

  const handleNext = () => {
    setCurrentIndex((i) =>
      shuffle ? Math.floor(Math.random() * songs.length) : (i + 1) % songs.length
    );
    setIsPlaying(true);
  };

  const handlePrev = () => {
    setCurrentIndex((i) =>
      shuffle ? Math.floor(Math.random() * songs.length) : (i - 1 + songs.length) % songs.length
    );
    setIsPlaying(true);
  };

  const handleFiles = (files) => {
    const arr = Array.from(files).map((file, idx) => {
      const url = URL.createObjectURL(file);
      return {
        id: file.name + idx,
        title: file.name.replace(/\.(mp3|wav|ogg|m4a)$/i, ""),
        artist: "Local File",
        src: url,
        cover: "/default-cover.svg",
      };
    });
    setSongs(arr);
    setCurrentIndex(0);
    setIsPlaying(true);
  };

  const handlers = {
    handlePlayPause,
    handleNext,
    handlePrev,
    setShuffle,
    setRepeat,
    handleFiles,
  };

  return { audioRef, songs, currentIndex, isPlaying, shuffle, repeat, handlers };
}
