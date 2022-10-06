import React, { useContext } from "react";

import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import { Songs } from "../Context";
export default function Controls() {
  const { song, setSongHandler } = useContext(Songs);

  const nextSongHandler = () => {
    setSongHandler(song.id + 1);
  };

  const prevSongHandler = () => {
    setSongHandler(song.id - 1);
  };
  return (
    <AudioPlayer
      className="bg-slate-900 h-24 audio"
      src={song.url}
      layout="stacked-reverse"
      showSkipControls
      showJumpControls={false}
      onClickNext={nextSongHandler}
      onClickPrevious={prevSongHandler}
      onEnded={nextSongHandler}
    />
  );
}
