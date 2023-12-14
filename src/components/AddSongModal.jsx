import React, { useState } from 'react'
import { FaCross, FaCut } from 'react-icons/fa'

function AddSongModal({handleAddSong,songList,setSongList}) {

    

    const [songData,setSongData] = useState({
        id:songList.length + 1,
        songName:"",
        songLink:"",
        songSource:"",
        addedOn:"14-12-23",
        thumbnail:null,
    })

    const handleInput = (e) =>{
        const name = e.target.name
        
        if (name === "thumbnail") {
            let file = e.target.files[0];
      
            if (file) {
              file = URL.createObjectURL(file)
              console.log(file)
              setSongData({
                ...songData,
                [name]: file,
              });
            }
          } else {
            const value = e.target.value;
            setSongData({
              ...songData,
              [name]: value,
            });
          }
      
          console.log(songData);
        };

    const handleSongList = (e) =>{
        setSongList([...songList,songData])
        handleAddSong(e )
    }
    

  return (
    <div className='w-[30rem] h-[30rem] border-2 flex flex-col items-center justify-center bg-white p-2'> 
        <div><p>Add Song </p></div>
        <form action="submit" className='flex flex-col w-full h-full items-center justify-between'>
        <label htmlFor="songName">
            song Name <br />
        <input type="text" name='songName' id='songName' value={songData.songName} onChange={handleInput} className='w-96 h-10' />
        </label>
        <label htmlFor="songLink">
        song Link <br />
        <input type="text" name='songLink' id='songLink' value={songData.songLink} onChange={handleInput} className='w-96 h-10'/>
        </label>
        <label htmlFor="songSource">
        song Source <br />
        <input type="text" name='songSource' id='songSource' value={songData.songSource} onChange={handleInput} className='w-96 h-10'/>
        </label>
        <label htmlFor="thumbnail">
            thumbnail <br />
        <input type="file" name='thumbnail' id='thumbnail' accept='image/*'  onChange={handleInput} className='w-96 h-10'/>
        </label>
        <div className='w-full flex justify-end items-center'>
            <button className='p-2' onClick={(e)=>handleAddSong(e)}>Cancel</button><button className='p-2 bg-blue-500 text-white' onClick={handleSongList}>Add</button>
        </div>
        </form>
       
    </div>
  )
}

export default AddSongModal