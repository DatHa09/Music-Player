import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../Context";

export default function ListSong() {
  const { song, DataSongs, setSongHandler } = useContext(Songs);
  const [idSong, setIdSong] = useState(0);

  const PlaySongHandler = (id) => {
    setIdSong(id);
    setSongHandler(id);
  };

  useEffect(() => {
    setIdSong(song.id);
  }, [song]);

  return (
    <div className="col-span-2 overflow-y-scroll">
      <table className="table-auto w-full">
        <thead className="h-12 text-white select-none">
          <tr>
            <th className="w-[10%]">#</th>
            <th className="text-left">Title</th>
            <th className="w-[10%]">Author</th>
            <th className="w-[10%]">Download</th>
          </tr>
        </thead>
        <tbody>
          {DataSongs.map((song, index) => (
            <tr
              key={song.id}
              className={`bg-slate-800 h-12  hover:bg-slate-600 hover:text-cyan-500 hover:cursor-pointer ${
                idSong === song.id
                  ? "text-cyan-500 bg-slate-600"
                  : "text-gray-500"
              }`}
              onClick={() => PlaySongHandler(song.id)}
            >
              <td className="text-center select-none">{index + 1}</td>
              <td className="text-left">{song.name}</td>
              <td className="text-center">{song.author}</td>
              <td className="text-center">
                <a href={song.url}>
                  <i className="fa-solid fa-download"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
