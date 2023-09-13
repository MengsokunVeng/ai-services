import { Sidebar, Header, NavBar, Pagination } from '@/components'

export default function Home() {
  return (
    <main className="overflow-hidden py-4">
      <Header />
      <NavBar />
      <div className="flex justify-around">
        <div className="bg-red-500"></div>
        <div className="border"></div>
        <div className="bg-red-500"></div>
      </div>
      <div className="flex justify-around max-sm:flex max-sm:justify-start max-sm:px-4">
        <div className=""></div>
        <div className="flex lg:justify-end mt-4 gap-2">
          <button className="inline-flex items-center bg-gray rounded-full px-3 py-0.5 text-sm font-medium text-white bg-primary bg-cyan-500">
            Popularity order
          </button>
          <button className="inline-flex items-center bg-gray rounded-full px-3 py-0.5 text-sm font-medium text-gray-text bg-gray-100">
            New arrival order
          </button>
        </div>
      </div>
      <Sidebar />
      <div className="flex justify-center items-center">
        <Pagination />
      </div>
    </main>
  )
}
