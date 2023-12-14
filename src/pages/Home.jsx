import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import AudioPlayer from "../components/AudioPlayer";
import SongCell from "../components/SongCell";
import { songs } from "../songdb/songs";
import AddSongModal from "../components/AddSongModal";

function Home() {

    const [isPlaying,setIsPlaying] =useState(false)
    //songdata
    const [songList, setSongList] = useState([...songs])
    //selectedSong
    const [selectedSong, setSelectedSong] = useState(songList[0])
    //audio_seek_bar
    const [audioValue,setAudioValue] = useState({...selectedSong,"progress":0})

    const audioElm = useRef()


  
     
    const handleDelete = (id) => {
        setSongList(songList.filter((song) => song.id!== id))
    }

    const handleSelectSong = (id) =>{
        setSelectedSong(songList.filter((song) =>song.id==id)[0])
    }

    const onPlaying = () =>{
        const duration = audioElm.current.duration;
        const currentTime = audioElm.current.currentTime;


        setAudioValue({...selectedSong,"progress":currentTime,"length":duration})

    }

    useEffect(()=>{
        if (isPlaying) {
            audioElm.current.play()
        } else {
            audioElm.current.pause()
        }
    },[isPlaying])


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
        <button>Logout</button>
      </nav>
      {/* main-songs-list */}
      <main className="w-full flex flex-col justify-between">
        <div>
        <header>
            <div className="w-full p-4 flex justify-between border-b-2">
                <span className="text-2xl">Songs</span>
                <button className="btn-secondary">Add Songs</button>
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
            {songList.map(song => <SongCell data={song} handleDelete={handleDelete} handleSelectSong={handleSelectSong}/>)}
        </tbody>
        </table>
        </div>
        <audio src={selectedSong.songLink} ref={audioElm} onTimeUpdate={onPlaying} />
        <AudioPlayer  setIsPlaying={setIsPlaying} isPlaying={isPlaying} songData={selectedSong} audioValue={audioValue} setAudioValue={setAudioValue} audioElm={audioElm} />
      </main>
      {/* <AddSongModal/> */}
    </div>
  );
}

export default Home;
