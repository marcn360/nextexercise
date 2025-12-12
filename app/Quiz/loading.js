import React from 'react'
import { resolve } from 'styled-jsx/css'

const Loading =  () => {
  
  return (
    <div className='bg-linear-to-r from-slate-800 to-slate-950 h-screen text-white content-center'>
      <p className='text-center md:text-8xl text-5xl'>
        Loading ...
      </p>
    </div>
  )
}

export default Loading