import React from 'react'

function SongCell({data}) {

     const {songName,songSource,songLink,thumbnail}=data

  return (
    <tr>
        <td className='flex items-center gap-4'>
            <span className=' w-20 h-20 border-4 border-red-400 overflow-hidden'><img src={thumbnail} alt={songLink} className='inline' /></span>
            <span>{songName}</span>
        </td>
        <td>
            <span>{songSource}</span>
        </td>
        <td>
            <span>AddedOn</span>    
        </td>
        <td>
            <button>play</button>
        </td>
        <td>
            <button>delete</button>
        </td>
    </tr>
  )
}

export default SongCell