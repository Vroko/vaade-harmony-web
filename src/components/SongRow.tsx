import type { Song, Artist } from "../types";

function msToMinSec(ms: number) {
  const min = Math.floor(ms / 60000);
  const sec = Math.floor((ms % 60000) / 1000);
  return `${min}:${sec.toString().padStart(2, "0")}`;
}

export default function SongRow({ song, showRank = true }: { song: Song; showRank?: boolean }) {
  let color = "";
  switch (song.rank) {
    case 1:
      color = "text-yellow-500";
      break;
    case 2:
      color = "text-gray-400";
      break;
    case 3:
      color = "text-amber-500";
      break;
    default:
      color = "";
  }
  return (
    <tr className="bg-gray-900 hover:bg-gray-700 transition">
      {showRank && <td className={`p-4 text-center text-xl font-bold ${color}`}>{song.rank}</td>}
      <td className="p-4">
        <div className="font-medium text-lg">{song.name}</div>
        <div className="text-base text-gray-400">{song.artists.map((a: Artist) => a.name).join(", ")}</div>
      </td>
      <td className="p-4 text-center text-lg">{msToMinSec(song.durationMs)}</td>
    </tr>
  );
}
