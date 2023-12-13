import React from "react";
import { NavLink } from "react-router-dom";
import AudioPlayer from "../components/AudioPlayer";
import SongCell from "../components/SongCell";
import { songs } from "../songdb/songs";

function Home() {

    const songList = songs

  return (
    <div className="flex w-full">
      {/* navingation-container */}
      <nav className="flex flex-col justify-between w-56 h-screen border-r-2">
        <h2>Logo</h2>
        <NavLink to="/" activeClassName="active-class">
          Songs
        </NavLink>
        <button>Logout</button>
      </nav>
      {/* main-songs-list */}
      <main className="w-full">
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
            {songList.map(song => <SongCell data={song}/>)}
        </tbody>
        </table>
        <AudioPlayer src={"src"}/>
      </main>
    </div>
  );
}

export default Home;
