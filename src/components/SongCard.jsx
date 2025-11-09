import React from "react";

export default function SongCard({ song, isPlaying }) {
  return (
    <div className="w-48 h-48 rounded-xl overflow-hidden shadow-lg relative">
      <img
        src={song?.cover || "/default-cover.svg"}
        alt="cover"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-3">
        <h3 className="text-white text-sm font-semibold truncate">
          {song?.title || "Unknown"}
        </h3>
        <p className="text-xs text-gray-300 truncate">{song?.artist}</p>
      </div>
      {isPlaying && (
        <div className="absolute top-2 right-2 text-xs px-2 py-1 bg-white/20 rounded-md">
          Playing
        </div>
      )}
    </div>
  );
}
