import Main from "../main/Main";
import MyNavbar from "../Navbar/MyNavbar";
import CardSlider from "../cardSlider/CardSlider";
import { Link} from "react-router-dom";
import WorkingSteps from "../workingSteps/WorkingSteps";
import LogoSlider from "../logoSlider/LogoSlider";
import Features from "../features/Features";
import Testimonials from "../testimonials/Testimonials";
import Contact from "../contact/Contact";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <>
      <div>
        <MyNavbar />

        <div className="container px-3 space-y-4">
          <Main />

          <CardSlider />
        </div>

        <div className="mt-11 flex justify-center">
          <Link to="/allcars" className="border-2 border-gray-700 px-4 py-2">
            {" "}
            Show All Vehicles <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>

        <p className="text-center px-4 py-2 bg-black text-white w-fit mx-auto mt-10 rounded-md">
          How It Work
        </p>

        <WorkingSteps />
        <LogoSlider />
        <Features />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
