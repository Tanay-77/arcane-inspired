import React from 'react'

export default function Button({id,title,containerClass}){
  return (
    <button id={id} className={`group relative z-10 w-fit  cursor-pointer
        overflow-hidden px-10 py-5 text-white ml-5 mt-5 ${containerClass} `}>
            <span className='relative incline-flex overflow-hidden font-valorant
            text-lg uppercase '>
                <div>
                    {title}
                </div>

            </span>
        </button>
  )
}
