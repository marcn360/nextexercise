import { useEffect, useState } from "react"




const Question = ({ id, type, question, choices, updateAnswers }) => {
  let selectedValues = []

  const handleCheckboxChange = (e) => {
    const value = e.target.value
    if (e.target.checked) {
      selectedValues = [...selectedValues, value]
    }
    else {
      selectedValues = selectedValues.filter(item => item !== value)
    }
    updateAnswers(id, selectedValues, true)
  }

  const updateTextAnswer = (e) => {
    updateAnswers(id, [{ answer: e.target.value }])
  }

  const takeAnswer = (choices, type, id) => {
    if (choices.length) {
      return choices.map((choice) => {
        if (type === 'radio') {
          return <div onChange={updateTextAnswer} key={choice.choice}>
            <label className="flex items-center mb-5" htmlFor={choice.choice}>
              <input id={choice.choice} type={type} name={id.toString()} className="w-4 h-4" value={choice.choice} />
              <p className="ms-2 text-md font-semibold text-heading select-none">{choice.choice}</p>
            </label>
          </div>
        }
        if (type === 'checkbox') {
          return <label className="flex items-center mb-5" key={choice.choice}>
            <input type={type} className="w-4 h-4" onChange={handleCheckboxChange} value={choice.choice} />
            <p className="ms-2 text-md font-semibold text-heading select-none">{choice.choice}</p>
          </label>
        }
      })
    }

    return <input onChange={updateTextAnswer} type={type} className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-lg focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" />
  }

  return (
    <div className="grid rounded-3xl bg-white m-5 p-5 md:m-10 md:p-10 ">
      <p className="mb-6 font-semibold sm:text-2xl">{question}</p>
      <div className="flex flex-col">
        {takeAnswer(choices, type, id)}
      </div>
    </div>
  )
}

export default Question