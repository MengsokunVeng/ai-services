import React from 'react'

type Props = {
  id: number
  title: string
  number: number
}

const List = (props: Props) => {
  const { id, title, number } = props

  return (
    <div>
      <ul className="flex flex-col gap-y-4">
        <li>
          <div>
            <a
              href="#"
              className="flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 text-black md:hover:opacity-75 md:transition-opacity md:ease-in"
            >
              <svg
                className="h-6 w-6 shrink-0 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="cyan"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                ></path>
              </svg>
              <p>
                <p>{title}</p>
              </p>
              <span
                className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-white px-2.5 py-0.5 text-center text-xs p-medium leading-5 ring-1 ring-inset ring-gray-line"
                aria-hidden="true"
              >
                <p>
                  <p>{number}</p>
                </p>
              </span>
            </a>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default List
