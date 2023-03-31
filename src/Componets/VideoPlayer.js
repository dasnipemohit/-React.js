import React,{useEffect, useState} from 'react'

const VideoPlayer = ({link}) => {

  return (
    <div>
        
                <video width="750" height="500" controls >
                <source src={link} type="video/mp4"/>
               </video>
                
            
       
    </div>
  )
}

export default VideoPlayer