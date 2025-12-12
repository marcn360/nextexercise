// "use client"
// import React, { useState } from 'react'
import Questions from '@/components/questions'

const page = async () => {
  const endpoint = 'https://honoquiz.cardosamarcnelson.workers.dev/api/quiz'
  const response = await fetch(endpoint)
 
  const quizzes = await response.json()

  return (
    <div className='flex items-center justify-center bg-linear-to-r from-slate-800 to-slate-950'>
      <Questions quizzes={quizzes}></Questions>
    </div>
  )
}

export default page