import React, { useEffect, useState } from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import BlogCard from './BlogCard';
import { toast } from 'react-toastify';



const BlogsSlider = () => {
    const categories = [
        {
            name: "Blog 1",
            path: "#",
            bgcolor: 'black' ,
        },
        {
            name: "Blog 2",
            path: "#",
            bgcolor: 'black' ,
        },
        {
            name: "Blog 3",
            path: "#",
            bgcolor: 'black',
        },
        {
            name: "Blog 4",
            path: "#",
            bgcolor: 'black',
        },
        {
            name: "Blog 5",
            path: "#",
            bgcolor:'black',
        },
        {
            name: "Blog 6",
            path: "#",
            bgcolor: 'black',
        },
        {
            name: "Blog 7",
            path: "#",
            bgcolor: 'black',
        },
    ];



  


        


  function createHex() {
    var hexCode1 = "";
    var hexValues1 = "0123456789abcdef";

    for (var i = 0; i < 6; i++) {
      hexCode1 += hexValues1.charAt(Math.floor(Math.random() * hexValues1.length));
    }
    return hexCode1;
  }

  function generate() {

    var deg = Math.floor(Math.random() * 360);

    var gradient = "linear-gradient(" + deg + "deg, " + "#" + createHex() + ", " + "#" + createHex() + ")";
    console.log(gradient);
    return gradient;
  }
  return (
    <div className='sliderout'>
      <h1>Blog Card</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          categories.map((category) => {
            return (
              <SwiperSlide>
                <BlogCard {...category} />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  )
}

export default BlogsSlider