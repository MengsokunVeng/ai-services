'use client'

import React, { useEffect, useState } from 'react'
import Card, { AiData } from './Card'
import List from './List'
import { aiServicesData, sideBarData } from '@/constants'
interface SidebarProps {
  data: AiData[]
}

const Sidebar = ({ data }: SidebarProps) => {
  const [width, setWidth] = useState(1700)
  const breakPoint = 1200
  if (typeof window !== 'undefined') {
    useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth)
      window.addEventListener('resize', handleWindowResize)

      return () => window.removeEventListener('resize', handleWindowResize)
    }, [])
  }

  return (
    <div className="flex max-w-[60%] my-0 mx-auto max-[1800px]:max-w-[70%] max-[1600px]:max-w-[75%] max-[1500px]:max-w-[80%] max-sm:mx-5 ">
      {width > breakPoint && (
        <div className="space-y-3 pt-6 mt-0 max-md:hidden ">
          <p className="text-xl font-bold text-black">Category</p>

          {sideBarData.map(({ id, title, count }) => {
            return <List key={id} title={title} count={count} id={id} />
          })}
        </div>
      )}
      <div className="pt-6 grid lg:grid-cols-4 w-full h-fit md:grid-cols-3 max-md:grid-cols-2">
        {data.map(({ id, image, rating, title, description }: AiData) => {
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
