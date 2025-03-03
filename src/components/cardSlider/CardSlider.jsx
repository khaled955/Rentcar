import { useEffect, useState } from "react";
import Card from "../Card/Card";
import axios from "axios";
import toast from "react-hot-toast";
import Loading from "../loading/Loading";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function CardSlider() {
  const [cars, setCars] = useState(null);

  async function getData() {
    try {
      const options = {
        url: "https://myfakeapi.com/api/cars/",
        method: "GET",
      };
      const { data } = await axios.request(options);
      setCars(data.cars.slice(0, 50));
    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="space-y-6">
        <h2 className="text-center p-3 rounded-md uppercase bg-black text-white w-[50%] mx-auto font-black">
          popular rental deals{" "}
        </h2>
        <p className=" text-center text-3xl uppercase mb-8">
          most popular cars rental deals{" "}
        </p>

        <div>
          {!cars ? (
            <Loading />
          ) : (
            <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay, Pagination, Navigation]}
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
              {cars.map((car) => (
                <SwiperSlide key={car.id}>
                  <Card carInfo={car} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </>
  );
}
