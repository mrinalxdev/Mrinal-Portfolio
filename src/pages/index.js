import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl">Hello Mrinal's Portfolio</h1>
    </main>
  )
}
