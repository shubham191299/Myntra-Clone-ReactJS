// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../Banners.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper banner-display"
      >
        <SwiperSlide> <img src="Banners/1.webp" alt="Banner" /> </SwiperSlide>
        <SwiperSlide> <img src="Banners/2.webp" alt="Banner" /> </SwiperSlide>
        <SwiperSlide> <img src="Banners/3.webp" alt="Banner" /> </SwiperSlide>
        <SwiperSlide> <img src="Banners/4.webp" alt="Banner" /> </SwiperSlide>
        <SwiperSlide> <img src="Banners/5.webp" alt="Banner" /> </SwiperSlide>
        <SwiperSlide> <img src="Banners/6.webp" alt="Banner" /> </SwiperSlide>
        <SwiperSlide> <img src="Banners/7.webp" alt="Banner" /> </SwiperSlide>
      </Swiper>
    </>
  );
}
