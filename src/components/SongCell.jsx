import React from 'react'
import { FaPlay, FaTrash } from 'react-icons/fa'

function SongCell({data,handleDelete,handleSelectSong}) {

     const {id,songName,songSource,songLink,thumbnail}=data

  return (
    <tr>
        <td className='flex items-center gap-4'>
            <span className=' w-16 h-16 border-4 border-red-400 overflow-hidden'><img src={thumbnail} alt={songLink} className='inline' /></span>
            <span>{songName}</span>
        </td>
        <td>
            <span>{songSource}</span>
        </td>
        <td>
            <span>AddedOn</span>    
        </td>
        <td>
            <button className='w-10 h-10 rounded-full bg-yellow-300 flex items-center justify-center' onClick={()=>handleSelectSong(id)}> <FaPlay className='w-4 h-4 text-white' /></button>
        </td>
        <td>
            <button onClick={()=>handleDelete(id)}><FaTrash/></button>
        </td>
    </tr>
  )
}

export default SongCell