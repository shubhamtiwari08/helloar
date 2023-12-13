import React from 'react'

function AudioPlayer({src}) {
  return (
    <div>
        <audio src={src}/>
    </div>
  )
}

export default AudioPlayer