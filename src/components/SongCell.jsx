import React from 'react'
import { FaPause, FaPlay, FaTrash } from 'react-icons/fa'

function SongCell({data,handleDelete,handleSelectSong,selectedSong}) {

     const {id,songName,songSource,songLink,addedOn,thumbnail}=data

  return (
    <tr>
        <td className='flex items-center gap-4'>
            <span className=' w-16 h-16 border-4 overflow-hidden'><img src={thumbnail} alt={songLink} className='inline' /></span>
            <span>{songName}</span>
        </td>
        <td>
            <span>{songSource}</span>
        </td>
        <td>
            <span>{addedOn}</span>    
        </td>
        <td>
            <button className='w-10 h-10 rounded-full bg-yellow-300 flex items-center justify-center text-white' onClick={()=>handleSelectSong(id)}>{selectedSong.id == id ? <FaPause/>:<FaPlay/>}</button>
        </td>
        <td>
            <button onClick={()=>handleDelete(id)}><FaTrash/></button>
        </td>
    </tr>
  )
}

export default SongCell