import React from 'react'

const Pagination = () => {
  return (
    <div className="mt-5 sm:w-full">
      <span className="relative z-0 flex justify-center ml-[300px] max-md:hidden">
        <span aria-current="page">
          <span className="relative inline-flex items-center mx-4 px-2 py-2 -ml-px text-sm border-b-2 border-primary font-medium text-gray-500 bg-white cursor-default leading-5">
            <p>
              <p>1</p>
            </p>
          </span>
        </span>
        <a
          href="http://app-liv.jp/ai/tools?page=2"
          className="relative inline-flex items-center mx-4 px-2 py-2 -ml-px text-sm font-medium text-gray-text border-b-2 border-gray-line bg-white leading-5 md:hover:opacity-75 md:transition-opacity md:ease-in"
          aria-label="Go to page 2"
        >
          <p>
            <p>2</p>
          </p>
        </a>
        <a
          href="http://app-liv.jp/ai/tools?page=3"
          className="relative inline-flex items-center mx-4 px-2 py-2 -ml-px text-sm font-medium text-gray-text border-b-2 border-gray-line bg-white leading-5 md:hover:opacity-75 md:transition-opacity md:ease-in"
          aria-label="Go to page 3"
        >
          <p>
            <p>Three</p>
          </p>
        </a>
        <a
          href="http://app-liv.jp/ai/tools?page=4"
          className="relative inline-flex items-center mx-4 px-2 py-2 -ml-px text-sm font-medium text-gray-text border-b-2 border-gray-line bg-white leading-5 md:hover:opacity-75 md:transition-opacity md:ease-in"
          aria-label="Go to page 4"
        >
          <p>
            <p>Four</p>
          </p>
        </a>
        <a
          href="http://app-liv.jp/ai/tools?page=5"
          className="relative inline-flex items-center mx-4 px-2 py-2 -ml-px text-sm font-medium text-gray-text border-b-2 border-gray-line bg-white leading-5 md:hover:opacity-75 md:transition-opacity md:ease-in"
          aria-label="Go to page 5"
        >
          <p>
            <p>Five</p>
          </p>
        </a>
        <a
          href="http://app-liv.jp/ai/tools?page=6"
          className="relative inline-flex items-center mx-4 px-2 py-2 -ml-px text-sm font-medium text-gray-text border-b-2 border-gray-line bg-white leading-5 md:hover:opacity-75 md:transition-opacity md:ease-in"
          aria-label="Go to page 6"
        >
          <p>
            <p>6</p>
          </p>
        </a>
        <a
          href="http://app-liv.jp/ai/tools?page=7"
          className="relative inline-flex items-center mx-4 px-2 py-2 -ml-px text-sm font-medium text-gray-text border-b-2 border-gray-line bg-white leading-5 md:hover:opacity-75 md:transition-opacity md:ease-in"
          aria-label="Go to page 7"
        >
          <p>
            <p>7</p>
          </p>
        </a>
        <a
          href="http://app-liv.jp/ai/tools?page=8"
          className="relative inline-flex items-center mx-4 px-2 py-2 -ml-px text-sm font-medium text-gray-text border-b-2 border-gray-line bg-white leading-5 md:hover:opacity-75 md:transition-opacity md:ease-in"
          aria-label="Go to page 8"
        >
          <p>
            <p>8</p>
          </p>
        </a>
        <a
          href="http://app-liv.jp/ai/tools?page=9"
          className="relative inline-flex items-center mx-4 px-2 py-2 -ml-px text-sm font-medium text-gray-text border-b-2 border-gray-line bg-white leading-5 md:hover:opacity-75 md:transition-opacity md:ease-in"
          aria-label="Go to page 9"
        >
          <p>
            <p>9</p>
          </p>
        </a>

        <a
          href="http://app-liv.jp/ai/tools?page=2"
          rel="next"
          className="relative inline-flex items-center px-2 py-2 -ml-px text-sm font-medium text-white bg-primary rounded-full leading-5 hover:text-gray-400 focus:z-10 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
          aria-label="pagination.next"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </span>

      <div className="flex items-center justify-between px-5 w-full mt-4 md:hidden">
        <a
          href="#"
          className="flex items-center justify-center px-3 h-8 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <svg
            className="w-3.5 h-3.5 mr-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          Previous
        </a>
        <a
          href="#"
          className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default Pagination
