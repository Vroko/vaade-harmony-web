import type{ Album } from "../types";

export default function AlbumHeader({ album }: { album: Album }) {
  const spotifyUrl = `https://open.spotify.com/album/${album.platformId}`;
  
  return (
    <div className="p-8 rounded-t-lg flex flex-col md:flex-row items-center gap-8">
      <a href={spotifyUrl} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
        <img
          src={album.imageUrls[0]}
          alt="Album cover"
          className="w-40 h-40 rounded shadow-lg mb-4 md:mb-0 cursor-pointer"
        />
      </a>
      <div className="flex-1 justify-items-start">
        <p className="text-white/80 text-lg">Album</p>
        <a href={spotifyUrl} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
          <h1 className="justify-start text-5xl font-bold text-white mb-2 cursor-pointer">{album.albumName}</h1>
        </a>
        <p className="text-white/80 text-xl mb-1">{album.albumArtists.join(", ")}</p>
        <p className="text-white/60 text-lg">Shared by {album.sharedByUsername}</p>
      </div>
      <div className="flex flex-col items-center mt-4 md:mt-0">
        {album.albumScore && (
          <div className="rounded-full border-4 border-white w-28 h-28 flex items-center justify-center text-4xl font-bold text-white">
            {album.albumScore}
          </div>
        )}
      </div>
    </div>
  );
}
