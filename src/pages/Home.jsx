import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AudioPlayer from "../components/AudioPlayer";
import SongCell from "../components/SongCell";
import { songs } from "../songdb/songs";
import AddSongModal from "../components/AddSongModal";

function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  //songdata
  const [songList, setSongList] = useState([...songs]);
  //selectedSong
  const [selectedSong, setSelectedSong] = useState(songList[0]);
  //audio_seek_bar
  const [audioValue, setAudioValue] = useState({
    ...selectedSong,
    progress: 0,
  });
  //addsongtoggle
  const [addSongToggle, setAddSongToggle] = useState(false);

  const [currentTime,setCurrentTime] = useState(0)

  const audioElm = useRef();

  const navigate = useNavigate();

  const handleDelete = (id) => {
    setSongList(songList.filter((song) => song.id !== id));
  };

  const handleSelectSong = (id) => {
    setSelectedSong(songList.filter((song) => song.id == id)[0]);
  };

  const onPlaying = (seekTime) => {
     
    setCurrentTime(audioElm.current.currentTime);
  };
  
  

  const handleAddSong = (e) => {
    setAddSongToggle(!addSongToggle);
    e.stopPropagation();
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    if (isPlaying) {
      audioElm.current.play();
    } else {
      audioElm.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className="flex w-full">
      {/* navingation-container */}
      <nav className="flex flex-col justify-between w-56 h-screen border-r-2">
        <div>
          <h2>Logo</h2>
          <NavLink to="/" activeClassName="active-class">
            Songs
          </NavLink>
        </div>
        <button onClick={handleLogout}>Logout</button>
      </nav>
      {/* main-songs-list */}
      <main className="w-full flex flex-col justify-between">
        <div>
          <header>
            <div className="w-full p-4 flex justify-between border-b-2">
              <span className="text-2xl">Songs</span>
              <button
                className="btn-secondary"
                onClick={(e) => handleAddSong(e)}
              >
                Add Songs
              </button>
            </div>
          </header>
          <table className="w-full">
            <thead>
              <tr>
                <th>SONG NAME</th>
                <th>SOURCE</th>
                <th>ADDED ON</th>
                <th></th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {songList.map((song) => (
                <SongCell
                  data={song}
                  handleDelete={handleDelete}
                  handleSelectSong={handleSelectSong}
                  selectedSong={selectedSong}
                />
              ))}
            </tbody>
          </table>
        </div>
        <audio
          src={selectedSong.songLink}
          ref={audioElm}
          onTimeUpdate={onPlaying}
        />
        <AudioPlayer
          handleSelectSong={handleSelectSong}
          onPlaying={onPlaying}
          setIsPlaying={setIsPlaying}
          isPlaying={isPlaying}
          songData={selectedSong}
          audioValue={audioValue}
          setAudioValue={setAudioValue}
          audioElm={audioElm}
          songList={songList}
          setSelectedSong={setSelectedSong}
          setCurrentTime={setCurrentTime}
        />
      </main>
      {addSongToggle && (
        <div
          className="absolute w-full bg-[#0000004c] h-screen flex items-center justify-center z-10"
          onClick={(e) => handleAddSong(e)}
        >
          <div
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <AddSongModal
              handleAddSong={handleAddSong}
              songList={songList}
              setSongList={setSongList}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
