import React, { useContext } from "react";
import { Songs } from "../Context";

export default function DetailSong() {
  const { song } = useContext(Songs);
  return (
    <div className="col-span-1 p-3">
      <h2 className="text-cyan-500 text-3xl font-bold select-none">Now playing</h2>

      <div className="w-[320px] m-auto mt-10">
        <img className="w-full h-[320px] object-cover rounded-full" src={song.links.images[0].url} alt="thumb" />
      </div>
      <div className="flex justify-center items-center mt-10">
      </div>
      <span className="text-white text-2xl block">{song.name}</span>
      <span className="text-[#a8a8a8] text-xl block">{song.author}</span>
    </div>
  );
}
