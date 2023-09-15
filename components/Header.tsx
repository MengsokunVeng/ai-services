'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { aiServicesData } from '@/constants'
import { NavBar, Pagination, Sidebar } from '.'
import Title from './Title'

const Header = () => {
  const [isFocus, setIsFocus] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState(aiServicesData)

  const handleInputChange = (e: any) => {
    const inputValue = e.target.value
    setQuery(inputValue)

    // Filter results based on the input value
    const filteredResults = aiServicesData.filter((item) =>
      item.title.toLowerCase().includes(inputValue.toLowerCase())
    )
    setResults(filteredResults)
  }

  return (
    <div className="w-full">
      <div className="shadow">
        <div className="flex max-w-[60%] my-0 mx-auto justify-between pb-3 max-sm:mx-5 max-sm:max-w-full max-[1800px]:max-w-[70%] max-[1600px]:max-w-[75%] max-[1500px]:max-w-[80%]">
          <a href="" className="flex flex-row items-center">
            <Image
              src="https://appliv-gai-production.s3.ap-northeast-1.amazonaws.com/images/logo.png"
              width={118}
              height={18}
              alt="logo"
            />
          </a>

          <div
            className="md:flex border h-10 w-[250px] rounded-xl items-center px-[10px] sm:hidden max-sm:hidden"
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
              value={query}
              onChange={handleInputChange}
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
      </div>
      <NavBar />
      <Title />
      <Sidebar data={results} />
      <div className="flex justify-center items-center">
        <Pagination />
      </div>
    </div>
  )
}

export default Header
