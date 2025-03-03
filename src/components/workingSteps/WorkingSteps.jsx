
export default function WorkingSteps() {
  return (
   <>
 <div className="space-y-6 mb-7">
 <h3 className="text-center text-3xl">Rent with following 3 working steps</h3>
 <div className="flex justify-center flex-wrap items-center gap-10 px-6">

<div className="work-step-one flex flex-col justify-center items-center">
<div className="icon">
    <i className="fa-solid fa-car text-2xl"></i>
    </div>
 <h3 className="font-black text-lg">Choose location </h3>
 <p className="text-gray-600">Choose your and find your best car </p>
</div>

<div className="work-step-two flex flex-col justify-center items-center">
    <div className="icon">
    <i className="fa-solid fa-circle-check text-2xl"></i>
    </div>
 <h3 className="font-black text-lg">Pick-up date </h3>
 <p className="text-gray-600">Select your pick up date and time to book your car </p>
</div>
 





   <div className="work-step-three flex flex-col justify-center items-center">
    <div className="icon">
    <i className="fa-solid fa-car text-2xl"></i>
    </div>
 <h3 className="font-black text-lg">Book your car </h3>
 <p className="text-gray-600">Book your car and we will deliver it directly to you </p>
   </div>





 </div>
 </div>
   </>
  )
}
