import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
import AnimatedTitle from './AnimatedTitle'
import React from 'react'


const About = () => {
  useGSAP(()=>{
    const clipAnimation = gsap.timeline({
      scrollTrigger:{
        trigger:'#clip',
        start:'center center',
        end:'+=800 center',
        scrub:0.5,
        pin : true,
        pinSpacing :true,
      }
    })

    clipAnimation.to('.mask-clip-path',{
      width:'100vw',
      height:'100vh',
      borderRadius : 0
    })
  })


  return (
    <div id='about' className='min-h-screen w-screen'>
        <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
            <h2 className='font-general text-sm uppercase md:tex-[10px]'>WE ARE VALORANT </h2>
            <AnimatedTitle  title=" A 5v5 t<b>a</b>ctical shooter featuring agents <b>w</b>ith unique abilities" 
            containerClass="mt-5 !text-black text-center" />
            


            <div className='about-subtext'>
              <p>The game of games</p>
              <p>VALORANT</p>
            </div>
            
      
        </div>
        <div className='h-dvh w-screen' id='clip' >
          <div className='mask-clip-path about-image '>
            <img src="img/about.webp" alt="background" className='absolute left-0 top-0
            size-full object-cover ' />
          </div>
        </div>
    </div>
  )
}

export default About