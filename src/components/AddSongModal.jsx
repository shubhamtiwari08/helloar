import React, { useState } from 'react'

function AddSongModal() {

    const [songData,setSongData] = useState({
        songName:"",
        songLink:"",
        songSource:"",
        addedOn:"14-12-23",
        thumbnail:"",
    })

  return (
    <div className='w-[60rem] h-96 border-2'> 
        <form action="submit" className='flex flex-col  border-2 items-center'>
        <label htmlFor="songName">
            song Name
        <input type="text" name='songName' id='songName' value={songData.songName}/>
        </label>
        <label htmlFor="songLink">
        song Link
        <input type="text" name='songLink' id='songLink' value={songData.songLink}/>
        </label>
        <label htmlFor="songSource">
        song Source
        <input type="text" name='songSource' id='songSource' value={songData.songSource}/>
        </label>
        <label htmlFor="thumbnail">
            thumbnail
        <input type="image" name='thumbnail' id='thumbnail' value={songData.thumbnail}/>
        </label>
        <div>
            <button className='p-2'>Cancel</button><button className='p-2 bg-blue-500 text-white'>Add</button>
        </div>
        </form>
       
    </div>
  )
}

export default AddSongModal