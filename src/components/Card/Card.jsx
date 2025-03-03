/* eslint-disable react/prop-types */
import photo5 from "/123.png";
import auto from "../../assets/imges/card/Frame.png";
import "./card.module.css";
import { Link } from "react-router-dom";
export default function Card({ carInfo }) {
  const { id, availability, price, car, car_model_year } = carInfo;

  let imagePath = new URL(`../../assets/imges/cars/${car}.png`, import.meta.url)
    .href || photo5;


  if (imagePath.includes("undefined")) {
    imagePath = photo5;
  }



  return (
    <>
      <div className="card-car overflow-hidden shadow-lg bg-slate-950 text-white">
        <div className="img p-3">
          <img className="w-full h-48 object-cover" src={imagePath} alt={car} />
        </div>
        <div className="card-text px-4 py-2 space-y-4">
          <h2 className="text-center capitalize font-black text-2xl"> {car}</h2>
          <div className="flex justify-between items-center">
            <div>
              <i className="fa-solid fa-star text-yellow-400 mr-1"></i>
              <span>(1200 reviews)</span>
            </div>
            <p className="bg-red-700 px-2 py-1 rounded-lg">
              {" "}
              {availability ? "Available" : "Not Available"}
            </p>
          </div>
          <div className="car-options flex flex-col gap-4 border-b-2 py-3">
            <div className="flex justify-between">
              <div>
                <i className="fa-solid fa-user"></i>
                <span> 2 Passenger</span>
              </div>

              <div>
                <i className="fa-solid fa-fan"></i>
                <span>Air conditioning</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <img src={auto} alt="" />
                  <span>Automatic</span>
                </div>

                <div>
                  <i className="fa-solid fa-calendar-days mr-2"></i>
                  <span>{car_model_year}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="flex justify-between items-center mb-2">
              <span>Price:</span>
              <p>
                {price} <span>/day</span>
              </p>
            </div>
            <Link to={`/cardetails/${id}`} className="btn w-full inline-block text-center rounded-md" >
             
                View Details
                <i className="fa-solid fa-arrow-right slid-arrow"></i>
             
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
