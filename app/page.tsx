'use client'

import { Sidebar, Header, NavBar, Pagination, Footer } from '@/components'
import React from 'react'

export default function Home() {
  return (
    <main className="overflow-hidden py-4">
      <Header />
      <div className="flex justify-around">
        <div className="bg-red-500"></div>
        <div className="border"></div>
        <div className="bg-red-500"></div>
      </div>

      <Footer />
    </main>
  )
}
