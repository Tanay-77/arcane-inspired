import React from 'react'
import { useState, useEffect } from 'react'
import Button from './Button'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const Hero = () => {
  const [isLoading, setIsLoading] = useState(true)
  
  const handleVideoLoad = () => {
    setIsLoading(false)
  }

  
  const videoSrc = 'videos/hero-1.mp4'
   
   

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
       
        <video 
          src={videoSrc}
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
