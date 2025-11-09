import React from "react";

export default function SongCard({ song, isPlaying }) {
  return (
    <div className="w-full sm:w-48 h-40 sm:h-48 rounded-xl overflow-hidden shadow-lg relative hover:scale-102 transition-transform duration-200">
      <img
        src={song?.cover || "./public/Cover.jpg"}
        alt={song?.title || "cover"}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-3 backdrop-blur-sm">
        <h3 className="text-white text-xs sm:text-sm font-semibold truncate">
          {song?.title || "Unknown"}
        </h3>
        <p className="text-xs text-gray-300 truncate">{song?.artist}</p>
      </div>
      {isPlaying && (
        <div className="absolute top-2 right-2 bg-black/80 text-amber-50 text-xs px-2 py-1 rounded-md backdrop-blur-sm">
          Playing
        </div>
      )}
    </div>
  );
}
