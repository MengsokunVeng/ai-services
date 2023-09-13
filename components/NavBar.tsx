import React from 'react'

const NavBar = () => {
  return (
    <div className="border-b-[1px] border-gray-200 max-w-[60%] mt-4 mx-auto max-sm:mx-5 max-sm:max-w-full">
      <div className="flex justify-start mb-10">
        <a href="" className="text-cyan-500">
          TOP
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>

        <a href="">Recommended</a>
      </div>
      <h1 className="text-3xl font-bold mb-4">Recommended AI Service Lists</h1>
    </div>
  )
}

export default NavBar
