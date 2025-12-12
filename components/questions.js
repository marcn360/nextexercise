'use client'
import React, { useEffect, useState } from 'react'
import Question from '@/components/question'
import ScoreModal from './scoreModal'

const Questions = ({ quizzes }) => {
  const [open, setOpen] = useState(false)
  const [score, setScore] =useState()
  const [answers, setAnswers] = useState(() => {
    return quizzes.map(quiz => {
      return { id: quiz.id, answers: null }
    })
  })

  const updateAnswers = (id, a) => {
    setAnswers((prevAnswers) => {
      const answersSet = [...prevAnswers]
      answersSet[id - 1].answers = a
      return answersSet
    })
  }

  const submit = async () => {
    // console.log({answers})
    const endpoint = 'https://honoquiz.cardosamarcnelson.workers.dev/api/grade'
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({answers:answers})
      })
      const res = await response.json()
      setScore(res.total)
      setOpen(true)
    } catch (error) {
      alert(error)
    }
  }

  return (
    <ul>
      {quizzes.map((quiz, index) => <Question key={index} id={quiz.id} type={quiz.type} question={quiz.question} choices={quiz.choices} updateAnswers={updateAnswers}></Question>)}
      <div className='flex justify-end'>
        <button onClick={submit} className='bg-amber-50 p-3 px-8 font-bold text-xl rounded-2xl m-5 md:mr-10 mt-0 hover:bg-amber-200 mb-10'>
          Submit
        </button>
      </div>
      <ScoreModal open={open} onClose={()=>setOpen(false)} score={score}></ScoreModal>
    </ul>
  )
}

export default Questions