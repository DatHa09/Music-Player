import "./App.css";
import Header from "./components/Header";
import DetailSong from "./components/DetailSong";
import ListSong from "./components/ListSong";
import { Songs } from "./Context";
import DataSongs from "./assets/data/songs.json";
import Controls from "./components/Controls";
import { useState } from "react";

function App() {
  const [song, setSong] = useState(DataSongs[0]);

  const setSongHandler = (id) => {
    if (id > DataSongs.length - 1) {
      setSong(DataSongs[0]);
    } else if (id < 0) {
      setSong(DataSongs[DataSongs.length - 1]);
    } else {
      const currentSong = DataSongs.find((song) => song.id === id);
      setSong(currentSong);
    }
  };
  return (
    <div className="App">
      <Songs.Provider value={{ DataSongs, song, setSongHandler }}>
        <Header />
        <div className="grid grid-cols-3 h-main-container bg-slate-700">
          {/* span 1 */}
          <DetailSong />
          {/* span 2 */}
          <ListSong />
        </div>
        <Controls />
      </Songs.Provider>
    </div>
  );
}

export default App;
