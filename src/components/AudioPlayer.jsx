import React from "react";
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from "react-icons/fa";

function AudioPlayer({ src, isPlaying, setIsPlaying, songData,audioValue,setAudioValue}) {


  const handlePlay = () => {

  }
  
  const handlePrevious = () => {};

  const handleNext = () => {

  };

  const handlePlayPause = () => {
    if (isPlaying) {
        setIsPlaying(!isPlaying)
    }else{
        setIsPlaying(!isPlaying)
    }
  };

  const handleSongLength = (e) => {
   
    setAudioValue({...songData, "progress":(e.target.value/audioValue?.length)*100});
    console.log(audioValue.length,"ch")
  }

  return (
    <div className="w-full">
      <input
        type="range"
        name="audio"
        id="audio"
        className="range-input"
        min='0'
        step='1'
        value={(audioValue?.progress) || 0}
        onChange={handleSongLength}
        
      />
      <div className="w-full flex justify-between items-center ">
        <div className="w-16 h-16 border-2">
          <img src={songData.thumbnail} alt={songData.songName} />
         
        </div>
        <p>{songData.songName}</p>
        <div className="w-20 flex justify-between pr-2">
          <button onClick={handlePrevious}>
            <FaStepBackward />
          </button>
          <button onClick={handlePlayPause}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button onClick={handleNext}>
            <FaStepForward />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AudioPlayer;
