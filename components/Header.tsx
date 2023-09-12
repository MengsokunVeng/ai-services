'use client'

import React, { useState } from 'react'

const Header = () => {
  const [isFocus, setIsFocus] = useState(false)

  return (
    <div className="flex justify-around shadow pb-3">
      <a href="" className="flex flex-row items-center">
        <img
          src="https://appliv-gai-production.s3.ap-northeast-1.amazonaws.com/images/logo.png"
          alt="logo"
          className="h-10 max-w-full border-none"
        />
      </a>

      <div
        className="md:flex border h-10 w-[250px] rounded-xl items-center px-[10px] sm:hidden max-sm:hidden "
        style={{ borderColor: isFocus ? '#00b4d8' : '#e2e8f0' }}
      >
        <svg
          className="h-4 w-4"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke={isFocus ? '#00b4d8' : '#e2e8f0'}
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          id="search"
          type="text"
          name="search"
          className="text-sm sm:text-base placeholder-gray-500 pl-2 w-full h-full focus:outline-none"
          placeholder="Search..."
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        />
      </div>
      <div className="flex md:hidden">
        <a href="#" className="flex items-center justify-center h-10 w-10 border-transparent">
          <svg
            className="h-6 w-6 text-gray-500"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default Header
