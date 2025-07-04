import SongRow from "./SongRow";
import type { Song } from "../types";

export default function SongList({ songs, showRank = true }: { songs: Song[]; showRank?: boolean }) {
  return (
    <div className="overflow-x-auto">
      <div className="bg-gray-500/20 p-6 rounded-lg">
        <table className="min-w-full text-left">
          <thead>
            <tr className="text-gray-400 text-sm uppercase rounded-lg">
              {showRank && <th className="p-4 text-center">Rank</th>}
              <th className="p-4">Title</th>
              <th className="p-4 text-center">Duration</th>
            </tr>
          </thead>
          <tbody>
            {songs.sort((a, b) => a.rank - b.rank).map((song, index) => (
              <SongRow key={song.id} song={{...song, rank: index + 1}} showRank={showRank} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
