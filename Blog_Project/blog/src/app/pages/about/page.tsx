import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/component/Navbar/Navbar'

export default function About() {
  return (
    <main >
      <Navbar/>
     <h1>This is About Page</h1>
    </main>
  )
}
