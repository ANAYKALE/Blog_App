 import React from 'react'
 import img1 from '@/app/assets/sliderTemp/Blog.jpg';
 import img2 from '@/app/assets/sliderTemp/download1.png';
 import { Swiper, SwiperSlide } from 'swiper/react';

 import 'swiper/css';
 import 'swiper/css/pagination';
 import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

const width=window.innerWidth;
const height=window.innerHeight;
 export default function HomeSlider() {
   return (
    <Swiper
    slidesPerView={1}
    spaceBetween={30}
    loop={true}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Pagination, Navigation]}
    className="mySwiper"
  >
    <SwiperSlide>
        <Image src={img1} alt="" width={width} height={height/2}
         style={{
            objectFit:"cover"
        }}/>
    </SwiperSlide>

    <SwiperSlide>
        <Image src={img2} alt="" width={width} height={height/2}
         style={{
            objectFit:"cover"
        }}/>
    </SwiperSlide>
  </Swiper>
   )
 }
 