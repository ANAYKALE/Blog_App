import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/component/Navbar/Navbar'
import HomeSlider from '@/component/HomeSlider/HomeSlider'
import BlogsSlider from '@/component/blogcards/BlogSlider'

export default function Profile() {
  return (
    <main >
      <meta>Hi</meta>
      <Navbar/>
      <HomeSlider/>
      <BlogsSlider/>
     <h1>This is Profile Page</h1>
    </main>
  )
}
