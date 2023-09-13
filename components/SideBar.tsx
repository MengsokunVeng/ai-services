import React from 'react'
import Card from './Card'
import List from './List'
import { aiServicesData, sideBarData } from '@/constants'

const Sidebar = () => {
  return (
    <div className="flex max-w-[60%] my-0 mx-auto max-sm:max-w-full max-sm:mx-5">
      <div className="space-y-3 pt-6 mt-0 max-md:hidden">
        <p className="text-xl font-bold text-black">Category</p>

        {sideBarData.map(({ id, title, count }) => {
          return <List key={id} title={title} number={count} />
        })}
      </div>
      <div className="pt-6 grid lg:grid-cols-4 w-full md:grid-cols-3 max-md:grid-cols-2">
        {aiServicesData.map(({ id, image, rating, title, description }) => {
          return (
            <Card
              key={id}
              id={id}
              image={image}
              rating={rating}
              title={title}
              description={description}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar
