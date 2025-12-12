import React from 'react'

const ScoreModal = ({ open, onClose, score }) => {
  return (
    <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/35" : 'invisible'}`}>
      <div
        className={`bg-yellow-50 rounded-2xl shadow p-6 transition-all ${open ? 'opacity-100' : 'opacity-0'} relative`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className='absolute top-2 right-2 text-gray-400 hover:text-black' onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
        <p className='text-2xl font-extrabold pt-3'>Your Score!</p>
        <p className='text-center text-5xl pt-3'>{score}</p>
      </div>
    </div>
  )
}

export default ScoreModal