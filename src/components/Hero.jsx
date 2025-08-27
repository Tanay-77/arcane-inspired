import React from 'react'
import { useState, useEffect } from 'react'
import Button from './Button'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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

   useEffect(()=>{
    if(loadedVideos === totalVideos-1){
        setIsLoading(false)
    }
   },[loadedVideos])
   
   useGSAP(()=>{
    if(hasClicked){
      gsap.set('#next-video',{visibility: 'visible'})

      gsap.to('#next-video',{
        transformOrigin : 'center center',
        scale : 1,
        width : '100%' ,
        height : '100%',
        duration : 1,
        ease : 'power1.inOut',
        onStart : () => nextVdRef.current.play(),
      })

      gsap.from('#current-video',{
        transformOrigin : 'center center',
        scale : 0,
        duration : 1.5,
        ease:'power1.inOut'
      })
    }

   },{dependencies :[currentIndex] , revertOnUpdate:true})

   useGSAP(()=>{
    gsap.set('#video-frame' , {
      clipPath : 'polygon(14% 0%, 72% 0%,90% 100%,0% 100%)',
      borderRadius :'0 0 40% 10% ',
    })

    gsap.from('#video-frame',{
      clipPath : 'polygon(0% 0%, 100% 0%,100% 100%,0% 100%)',
      borderRadius :'0 0 0% 0% ',
      ease : 'power1.inOut',
      scrollTrigger : {
        trigger : '#video-frame',
        start : 'center center',
        end : 'bottom center',
        scrub : true,
      }
    })
   })

   const getVideoSrc = (index) => `videos/hero-${index}.mp4`

   const handleVideoLoad = () => {
    setLoadedVideos(prev => prev + 1)
   }

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">

      {isLoading && (
        <div className='flex-center absolute z-[100] h-dvh w-screen
        overflow-hidden bg-violet-50 '>
          <div className='three-body'>
            <div className='three-body__dot' />
            <div className='three-body__dot'/>
             <div className='three-body__dot'/>
          </div>
        </div>
      )}
     <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden 
     rounded-lg bg-blue-75 '>
        <div className='mask-clip-path absolute-center absolute z-[60] size-64
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
                              
                  onLoadedData={handleVideoLoad}
                />
            </div>

        </div>
        <video 
          src={getVideoSrc(upcomingVideoIndex)}
          loop
          muted
          className='absolute-center invisible absolute z-20 size-64 object-cover
          object-center '
          onLoadedData={handleVideoLoad}
          id='next-video'
          
        />
        <video 
          src={getVideoSrc(currentIndex)}
          autoPlay
          loop
          muted
          className='absolute-center absolute z-10 h-full w-full object-cover'
          onLoadedData={handleVideoLoad}
          id='current-video'
        />
         <h1 className='font-valorant hero-heading absolute bottom-5 tracking-tighter
        right-5 z-40 text-blue-100 px-5 ' style={{fontFamily: '"valorant", "Arial Black", sans-serif'}}>SEASON 2025</h1>
        <div className='absolute left-0 top-0 z-40 size-full pointer-events-none'>
        <div className='mt-32 px-5 sm:px-10 pointer-events-auto'> 
          <h1 className='font-valorant hero-heading text-blue-100 tracking-tighter' style={{fontFamily: '"valorant", "Arial Black", sans-serif'}} >
              valor<span className="text-pink-100">a</span>nt 
          </h1>
          <Button id='play btn' title='Play Now' containerClass='!bg-pink-100 flex-center gap-1 '  />
        </div>
      </div>
     </div>   
     
        <h1 className='font-valorant hero-heading absolute bottom-5 tracking-tighter
        right-5  text-black px-5 ' style={{fontFamily: '"valorant", "Arial Black", sans-serif'}}>SE<span className="text-pink-100">A</span>SON 2025</h1>
    </div >
  )
}
