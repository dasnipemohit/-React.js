import React from 'react'
import VideoPlayer from './VideoPlayer'

function Video(props) {
  return (
    <div>
      Video

      <span>
        {props.videos.length}
      </span>

      {
        props.videos.map(links=>
        
<VideoPlayer link={links}/>
            
            
            )
      }

      
    </div>
  )
}

export default Video
