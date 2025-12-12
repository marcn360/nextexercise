import React from 'react'
import Image from 'next/image'

const page = async () => {
  
  return (
    <div className='bg-linear-to-r from-slate-800 to-slate-950 h-screen text-white  content-center'>
      <div className='text-center mx-4 md:mx-9'>
        <h2 className='md:text-7xl text-5xl'>Quiz App</h2>
        <p className='md:text-2xl text-xl'>"Ready for a quick knowledge check? Quiz App offers a sleek, intuitive platform for testing your trivia and expertise. Answer the questions, and see your results instantly. Quick to play, easy to master.</p>
      </div>
  
      <div className='justify-center flex mx-5 mt-9'>
        <Image src="/reactQuiz.png" width={400} height={350} alt='Quiz App' className='rounded rounded-lg'></Image>
      </div>
    </div>
  )
}

export default page