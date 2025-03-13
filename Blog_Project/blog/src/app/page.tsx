"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/component/Navbar/Navbar'
import HomeSlider from '@/component/HomeSlider/HomeSlider';
import CategoriesSlider from '@/component/Categories/CategoriesSlider';
import BlogsSlider from '@/component/blogcards/BlogSlider';
export default function Home() {
  return (
    <main >
      <Navbar/>
      <HomeSlider/>  
      <CategoriesSlider/>
      <BlogsSlider/>
         <h1 >This is Blog App</h1>
    </main>
  )
}
