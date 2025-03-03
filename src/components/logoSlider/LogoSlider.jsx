import audi from "../../assets/imges/landing-page/audi.png"
import volvo from "../../assets/imges/landing-page/volvo.png"
import jaguar from "../../assets/imges/landing-page/jaguar.png"
import nissan from "../../assets/imges/landing-page/nissan.png"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "./logoSlider.module.css"



export default function LogoSlider() {
  return (
   <>
   <div className="container mt-4 mb-7 logo-slider">
   <Swiper
         autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="logo-slider"
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
   
   
   
   
   >
<SwiperSlide>
    <img src={audi} alt="audi" />
</SwiperSlide>
<SwiperSlide>
    <img src={volvo} alt="volvo" />
</SwiperSlide>
<SwiperSlide>
    <img src={nissan} alt="nissan" />
</SwiperSlide>
<SwiperSlide>
    <img src={jaguar} alt="jaguar" />
</SwiperSlide>


   </Swiper>
   </div>
   </>
  )
}
