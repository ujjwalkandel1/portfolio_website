import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full'>
      <video className='h-full w-full object-cover' autoPlay loop muted  src="https://download-video-ak.vimeocdn.com/v3-1/playback/a278bb9c-996c-4760-8ca1-dd0abff308f7/83c745cf?__token__=st=1757175632~exp=1757179232~acl=%2Fv3-1%2Fplayback%2Fa278bb9c-996c-4760-8ca1-dd0abff308f7%2F83c745cf%2A~hmac=51787d6477eeb3e54f6c7b2d6d9b355353f90f80dca887fb136e39396b4e04a2&r=dXMtd2VzdDE%3D" ></video>
    </div>
  )
}

export default Video