import React, { useState } from "react";
import { motion } from "framer-motion";
import PlayerControls from "./components/PlayerControls";
import SongCard from "./components/SongCard";
import ThemeToggle from "./components/ThemeToggle";
import useAudioPlayer from "./hooks/useAudioPlayer";

export default function App() {
  const [theme, setTheme] = useState("dark");
  const { songs, currentIndex, isPlaying, handlers } = useAudioPlayer();

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-6 transition-colors duration-500 ${
        theme === "dark"
          ? "bg-linear-to-br from-gray-900 via-indigo-900 to-black"
          : "bg-linear-to-br from-indigo-200 via-white to-purple-100"
      }`}
    >
      <div className="w-full max-w-3xl">
        <div className="flex justify-end mb-4">
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl p-4 sm:p-6 shadow-2xl bg-white/10 backdrop-blur-xl border border-white/20 w-full max-w-[95vw] mx-auto"
        >
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 items-center">
            <div className="flex items-center justify-center w-full max-w-[280px] mx-auto sm:max-w-none">
              <SongCard song={songs[currentIndex]} isPlaying={isPlaying} />
            </div>

            <div className="sm:col-span-1 md:col-span-2 text-center sm:text-left">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                VibeFlow
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 mb-4">
                Sleek React Music Player
              </p>

              <PlayerControls
                songs={songs}
                currentIndex={currentIndex}
                isPlaying={isPlaying}
                handlers={handlers}
              />

              <div className="mt-6">
                <p className="text-sm text-shadow-green-50  mb-1 bg-red-500/10 backdrop-blur-xl border border-white/20 p-2 rounded">
                  Upload your local songs:
                </p>
                <input
                  type="file"
                  accept="audio/*"
                  multiple
                  onChange={(e) => handlers.handleFiles(e.target.files)}
                  className="text-sm bg-white/10 p-2 rounded w-full text-gray-800 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </motion.div>

        <p className="mt-6 text-center text-sm text-gray-400">
          Built with React • TailwindCSS • Framer Motion
        </p>
      </div>
    </div>
  );
}
