import React from 'react'
import Bentocard from './Bentocard'

const Features = () => {
  return (
    <section className='bg-black pb-52'>
        <div className='container mx-auto px-3 md:px-10'>
            <div className='px-5 py-32'>
                <p className='font-circular-web text-lg text-blue-100'>
                    YOUR AGENTS
                </p>
            
            <p className='max-w-md font-circular-web text-lg
            text-blue-100 opacity-50'>
                More than guns and bullets, you’ll choose an Agent armed with adaptive, swift, and lethal abilities that create opportunities to let your gunplay shine. No two Agents play alike, 
                just as no two highlight reels will look the same.
            </p>
            </div>

        
        <div className='border-hsla relative mb-7 h-96
        w-full overflow-hidden rounded-md md:h-[65vh]'>
            <Bentocard  
              src='videos/feature-1.mp4'
              title = {<>radi<b>n</b>t</>}
              description = 'Valorant'/>
              

        </div>
        <div className='grid h-[135vh] grid-cols-3 grid-rows-4 gap-7'>
          <div className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2'>
            <Bentocard 
             src='videos/feature-2.mp4'
             title={<>JE<b>T</b>T</>}
              />
          </div>
           <div className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2'>
            <Bentocard 
             src='videos/feature-3.mp4'
             title={<>Pho<b>e</b>nix</>}
            />
          </div>
           <div className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2'>
            <Bentocard 
             src='videos/feature-4.mp4'
             title={<>Gek<b>k</b>o</>}
             />
          </div>
           <div className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2'>
            <Bentocard 
             src='videos/feature-5.mp4'
             title={<>So<b>v</b>a</>}
             
            />
          </div>
           <div className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2'>
            <Bentocard 
             src='videos/feature-6.mp4'
             title={<>Sa<b>g</b>e</>}
             
            />
          </div>
           <div className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2'>
            <Bentocard 
             src='videos/feature-7.mp4'
             title={<>re<b>y</b>na</>}
             
            />
          </div>
          
          
          
          
        
         
        </div>
        

        </div>
    </section>
  )
}

export default Features