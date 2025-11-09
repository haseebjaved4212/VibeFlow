import React from "react";
import {
  FiPlay,
  FiPause,
  FiSkipBack,
  FiSkipForward,
  FiShuffle,
  FiRepeat,
} from "react-icons/fi";

export default function PlayerControls({
  songs,
  currentIndex,
  isPlaying,
  handlers,
}) {
  const current = songs[currentIndex] || {};

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white truncate">
            {current.title}
          </h2>
          <p className="text-sm text-gray-300 truncate">{current.artist}</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => handlers.setShuffle((s) => !s)}
            title="Shuffle"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <FiShuffle />
          </button>

          <button
            onClick={handlers.handlePrev}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <FiSkipBack />
          </button>

          <button
            onClick={handlers.handlePlayPause}
            className="p-4 rounded-full bg-linear-to-r from-indigo-500 to-pink-500 text-white hover:scale-105 transition"
          >
            {isPlaying ? <FiPause /> : <FiPlay />}
          </button>

          <button
            onClick={handlers.handleNext}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <FiSkipForward />
          </button>

          <button
            onClick={() => handlers.setRepeat((r) => !r)}
            title="Repeat"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <FiRepeat />
          </button>
        </div>
      </div>

      <div className="w-full h-2 bg-white/10 rounded-full mt-5 overflow-hidden">
        <div className="h-full bg-white/40 w-1/3 animate-pulse"></div>
      </div>
    </div>
  );
}
