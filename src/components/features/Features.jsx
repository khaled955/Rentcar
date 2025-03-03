import audi from "../../assets/imges/cars/Jeep.png"
import "./features.module.css"
export default function Features() {
  return (
   <>
   <div className="fatures-box flex justify-between mt-11 items-start">




    <div className="img-car-box basis-[50%] hidden md:block relative">
        <div className="feature-overlay absolute left-0 w-full h-full"></div>
     <img className="w-full" src={audi} alt="audi-img" />
    </div>





    <div className="fatures-info md:basis-[50%] flex flex-col items-center md:items-start">
<p className="bg-gray-600 w-fit px-4 py-2 rounded-md capitalize text-white mb-3">why choose us</p>
<p className="text-3xl mb-3 capitalize w-[80%] md:w-full">We offer the best experience with our rental deals</p>
<div className="features-box-info space-y-3">

<div className="feature-data flex gap-4 items-center">
<i className="fa-solid fa-money-bill font-black text-2xl"></i>
<div className="featur-text">
    <h3 className="font-semibold text-lg">Best price guaranteed    </h3>
    <p className="text-gray-600 capitalize text-sm">Find a lower price? We’ll refund you 100% of the difference.    </p>
</div>
</div>


<div className="feature-data flex gap-4 items-center">
<i className="fa-solid fa-gears font-black text-2xl"></i>
<div className="featur-text">
    <h3 className="font-semibold text-lg">24 hour car delivery    </h3>
    <p className="text-gray-600 capitalize text-sm">Book your car anytime and we will deliver it directly to you.    </p>
</div>
</div>



<div className="feature-data flex gap-4 items-center">
<i className="fa-solid fa-calendar-days font-black text-2xl"></i>
<div className="featur-text">
    <h3 className="font-semibold text-lg">Best price guaranteed    </h3>
    <p className="text-gray-600 capitalize text-sm">Find a lower price? We’ll refund you 100% of the difference.    </p>
</div>
</div>


<div className="feature-data flex gap-4 items-center">
<i className="fa-solid fa-gears font-black text-2xl"></i>
<div className="featur-text">
    <h3 className="font-semibold text-lg">24/7 technical support    </h3>
    <p className="text-gray-600 capitalize text-sm">Have a question? Contact Rentcars support any time when you have problem.   </p>
</div>
</div>






</div>
    </div>
   </div>
   </>
  )
}
