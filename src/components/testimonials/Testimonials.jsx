import TestimonialsCard from "../testimonialsCard/TestimonialsCard";
import "./testimonials.module.css"
import boy from "../../assets/imges/landing-page/sec-6/Rectangle 8 (1).png"
import girl from "../../assets/imges/landing-page/sec-6/girl.png"
import man from "../../assets/imges/landing-page/sec-6/man.jpg"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function Testimonials() {
  return (
 <>
<div className="mt-10 testo-box pt-8 pb-6">
    <h2 className="w-fit mx-auto bg-gray-800 text-white capitalize rounded-md px-4 py-2 text-2xl mb-7">testimonials    </h2>
    <p className="text-center text-3xl capitalize mb-6 "> what people say about us?</p>
<div>
<Swiper
         autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="testo-slide"
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
   
   
   
   
   >
<SwiperSlide>
<TestimonialsCard imgSrc={boy}/>
</SwiperSlide>

<SwiperSlide>
<TestimonialsCard imgSrc={girl}/>
</SwiperSlide>

<SwiperSlide>
<TestimonialsCard imgSrc={man}/>
</SwiperSlide>




   </Swiper>
</div>
 
</div>
 </>
  )
}
