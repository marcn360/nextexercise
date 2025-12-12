import React from 'react'
import Image from 'next/image'

const Nav = () => {
  return (
    <nav className="bg-neutral-primary container flex justify-between">
      <a className='p-3 ml-2 pt-5' href='/'>
        <Image src='/Portfolio Logo.png' width={32} height={24} alt='Logo' />
      </a>
      <span>
        <ul className='flex antialiased mr-2 font-semibold font-sans md:text-2xl text-xl'>
          <li className='flex content-center'>
            <a className='' href='/'>
              <button type='button' className='hover:bg-neutral-100 p-5 '>
                Home
              </button>
            </a>
          </li>
          <li className='flex content-center'>
            <a className='' href='/Quiz'>
              <button type='button' className='hover:bg-neutral-100 p-5 '>
                Quiz
              </button>
            </a>
          </li>
        </ul>
      </span>
    </nav>
  )
}

export default Nav