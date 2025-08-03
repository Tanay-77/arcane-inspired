import React from 'react'
import { useState, useEffect } from 'react'

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1)
  const [hasClicked, setHasClicked] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [loadedVideos, setLoadedVideos] = useState(0)
  const totalVideos = 4
  const nextVdRef = React.useRef(null)
  const audioRef = React.useRef(null)

  const upcomingVideoIndex = (currentIndex % totalVideos) + 1


   const handleMiniVdClick = ()=>{
    setHasClicked(true)

    setCurrentIndex(upcomingVideoIndex)
    
   }

   const getVideoSrc = (index) => `videos/hero-${index}.mp4 `

   const handleVideoLoad = () => {
    setLoadedVideos(prev => prev + 1)
   }

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
     <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden 
     rounded-lg bg-blue-75 '>
        <div className='mask-clip-path absolute-center absolute z-50 size-64
        cursor-pointer overflow-hidden rounded-lg '>
            <div onClick={handleMiniVdClick} className='origin-center scale-50 opacity-0
            transition-all duration-500 ease-in hover:scale-100 hover:opacity-100 '>
                <video
                  ref={nextVdRef}
                  src={getVideoSrc(upcomingVideoIndex)}
                  className="size-64 origin-center scale-150 
                  object-cover object-center "
                  muted
                  loop
                  autoPlay
                  id='current-video'
                  
                  onLoadedData={handleVideoLoad}
                />
            </div>

        </div>
        <video 
          ref={nextVdRef}
          src={getVideoSrc(upcomingVideoIndex)}
          loop
          muted
          className='absolute-center invisible absolute z-20 size-64 object-cover
          object-center '
          onLoadedData={handleVideoLoad}
        />
        <video 
          src={getVideoSrc(currentIndex)}
          autoPlay
          loop
          muted
          className='absolute-center absolute z-10 h-full w-full object-cover'
          onLoadedData={handleVideoLoad}
        />
     </div>
    </div >
  )
}
