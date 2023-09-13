import React from 'react'
import Card from './Card'
import List from './List'
import { Pagination } from '.'

const Sidebar = () => {
  const col = Array.from({ length: 50 }, (_, i) => i + 1)
  const listCol = Array.from({ length: 15 }, (_, i) => i + 1)

  return (
    <div className="flex max-w-[60%] my-0 mx-auto max-sm:max-w-full max-sm:mx-5">
      <div className="space-y-3 pt-6 mt-0 max-md:hidden">
        <p className="text-xl font-bold text-black">Category</p>

        {listCol.map(() => {
          return <List />
        })}
      </div>
      <div className="pt-6 grid lg:grid-cols-4 w-full md:grid-cols-3 max-md:grid-cols-2 ">
        {col.map(() => {
          return <Card />
        })}
      </div>
    </div>
  )
}

export default Sidebar
