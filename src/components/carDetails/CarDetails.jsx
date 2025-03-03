import { Link } from "react-router-dom";
 import audi from "../../assets/imges/cars/Jeep.png"
 import air from "../../assets/imges/card/d8wxke_2_.png"
 import door from "../../assets/imges/card/doors.png"
import fram from "../../assets/imges/card/Frame.png"
import user from "../../assets/imges/card/user.png"
 import "./carDetails.module.css"
export default function CarDetails() {
  return (
    <div className="car-details-box px-4">
      <div>
        <div className="links py-8">
        <Link className="text-blue-600 border-b-2 border-b-blue-700" to="/home"> Home</Link> /  <Link className="text-blue-600 border-b-2 border-b-blue-700" to="/home"> Cars</Link> /  <Link> Car Details</Link>
        </div>

        <div className="car-content grid md:grid-cols-2 gap-6">
            <div className="img-car-content">
             <img className="w-full" src={audi} alt="" />
            </div>

            <div className="car-deatils-text md:w-[50%]">
                <h2 className="w-fit bg-slate-600 text-white rounded-md px-4 py-1 mb-4"> why choose us</h2>
                <p className="text-lg mb-5"> We offer the best experience with our rental deals</p>

                <div className="car-details-features space-y-4">
                    <div className="flex items-center gap-3 text-gray-500">
                    <img src={user} alt="photo of user" />
                    <span> 2 Passenger</span>
                    </div>

                    <div className="flex items-center gap-3 text-gray-500">
                    <img src={air} alt="photo of user" />
                    <span> Air Conditioning</span>
                    </div>



                    <div className="flex items-center gap-3 text-gray-500">
                    <img src={fram} alt="photo of user" />
                    <span> CVT</span>
                    </div>

                    <div className="flex items-center gap-3 text-gray-500">
                    <img src={door} alt="photo of user" />
                    <span> Doors</span>
                    </div>




                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
