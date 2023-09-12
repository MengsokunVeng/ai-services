import { Sidebar, Header, NavBar } from '@/components'

export default function Home() {
  return (
    <main className="overflow-hidden py-4">
      <Header />
      <NavBar />
      <div className="flex justify-around border"></div>
      <Sidebar />
    </main>
  )
}
