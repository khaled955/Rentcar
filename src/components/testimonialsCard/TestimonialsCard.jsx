/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import "./testimonialsCard.module.css"

export default function TestimonialsCard({imgSrc}) {
  return (
  <>
  <div className="testo-card flex justify-between gap-3 bg-white">
    <div className="test-img">
        <img className="w-[500px] h-80 object-cover" src={imgSrc} alt="photo testimonials" />
    </div>
    <div className="testo-text py-3">
        <span className="text-2xl font-bold"> 5.5</span> <sub>Stars</sub>
        <p className=" mb-4">
             <i className="fa-solid fa-star text-yellow-300"></i>
             <i className="fa-solid fa-star text-yellow-300"></i>
             <i className="fa-solid fa-star text-yellow-300"></i>
             <i className="fa-solid fa-star text-yellow-300"></i>
             </p>
        <p className="font-semibold w-[50%]">“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.” </p>
         <span className="text-gray-500">Last Updated #minutes Ago</span>
    </div>
  </div>
  </>
  )
}
