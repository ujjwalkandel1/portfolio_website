import React from 'react'
import Video from './video'

const HomeHeroText = () => {
  return (
    <div className='font-[font2] pt-5 text-center'>
        <div className='text-[7vw] uppercase leading-[10vw] '>Hi, I am</div>

        <div className='text-[7vw] flex items-center uppercase leading-[10vw] '>Frontend 
            <div className='h-'>
            <Video /> 
            </div>
            Developer
            </div>

        <div className='text-[7vw] uppercase leading-[10vw] t'>Qui genere</div>
    </div>
  )
}
 
export default HomeHeroText