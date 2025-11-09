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
    <div className="w-full max-w-[95vw] mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
        <div className="text-center sm:text-left w-full sm:w-auto">
          <h2 className="text-base sm:text-lg font-semibold text-black truncate max-w-[200px] sm:max-w-none">
            {current.title}
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 truncate">
            {current.artist}
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto">
          <button
            onClick={() => handlers.setShuffle((s) => !s)}
            title="Shuffle"
            className="p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:scale-105 active:scale-95"
          >
            <FiShuffle className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <button
            onClick={handlers.handlePrev}
            className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:scale-105 active:scale-95"
          >
            <FiSkipBack className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <button
            onClick={handlers.handlePlayPause}
            className="p-3 sm:p-4 rounded-full bg-linear-to-r from-indigo-500 to-pink-500 text-white hover:scale-105 active:scale-95 transition-all"
          >
            {isPlaying ? (
              <FiPause className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <FiPlay className="w-5 h-5 sm:w-6 sm:h-6 ml-1" />
            )}
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
