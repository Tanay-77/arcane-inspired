import React from 'react'
import AnimatedTitle from './AnimatedTitle'
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
                <img src="/img/entrance.webp" alt="img" />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Story