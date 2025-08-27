import React from 'react'
import AnimatedTitle from './AnimatedTitle'
import Button from './Button'
const Story = () => {
  return (
    <section id="story" className='min-h-dvh w-screen bg-black
    text-blue-100'>
      <div className='flex size-full flex-col items-center
      py-10 pb-24 '> 
        <p className='font-general text-sm uppercase 
        md:text-[10px]'>FIGHT AROUND THE WORLD</p>
        <div className='relative size-full'>
          <AnimatedTitle 
          title="YOUR MAPS"
          containerClass="mt-5 pointer-events-none mix-blend-differnce
          relative z-10"
          />
          <div className='story-img-container'>
            <div className='story-img-mask'>
              <div className='story-img-content'>
                <img src="/img/map.jpg" alt="img" className='object-contain' />
              </div>
            </div>

          </div>

        </div>
        <div className='-mt-80 flex w-full justify-center md:-mt-64
        md:me-44 md:justify-end'>
          <div className='flex h-full w-fit flex-col items-center md:items-start'>
            <p className='mt-3 max-w-sm text-center font-circular-web
            text-violet-100 md:text-start'>Each map is a playground to showcase your creative thinking. Purpose-built for team strategies, spectacular plays, and clutch moments. Make the play others will imitate for years to come..</p>
           
           <div className="w-full flex justify-center md:justify-start mt-4">
             <Button id="realm-button" title="VIEW ALL MAPS" containerClass="bg-pink-100"/>
           </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Story