import React from "react";
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from "react-icons/fa";

function AudioPlayer({ audioElm,setCurrentTime, isPlaying, setIsPlaying, songData,audioValue,setAudioValue,handleSelectSong,songList,onPlaying,setSelectedSong,}) {


  
  
  const handlePrevious = () => {
    audioElm.current.pause()
    const id = songData.id;
    if(Number(id)>1){
    handleSelectSong(Number(id)-1)
    setIsPlaying(false)
    }
  };

  const handleNext = () => {

    const id = songData.id;
   if(Number(id) < songList.length){
    handleSelectSong(Number(id)+1)
    setIsPlaying(false)
   }
  };

  const handlePlayPause = () => {
    if (isPlaying) {
        setIsPlaying(!isPlaying)
    }else{
        setIsPlaying(!isPlaying)
    }

  };

  const handleSlide = (e) =>{
    const seekTime = e.target.value;
    audioElm.current.currentTime = seekTime;
    
    setSelectedSong({
        ...songData,
        "progress":seekTime 
    })

    setCurrentTime(seekTime)
     
  }

  

  return (
    <div className="w-full">
      <input
        type="range"
        name="audio"
        id="audio"
        className="range-input"
        
        value={(songData?.progress) || 0}
        onChange={handleSlide}
        
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
