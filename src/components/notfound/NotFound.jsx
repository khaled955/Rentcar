import { Link } from "react-router-dom"
import notfound from "../../assets/imges/not-found/404-not-found.png"
export default function NotFound() {
  return (
    <div className=" flex flex-col sm:flex-row gap-5 justify-center overflow-hidden h-screen items-center">
     <img className="w-[50%]" src={notfound} alt="" />


     <Link className="btn rounded-md" to="/home"> Back To Home</Link>
    </div>
  )
}
