import { Navbar } from "flowbite-react";
import logo from "../../assets/imges/nav/logo.png";
import "./Navbar.module.css"
export default function MyNavbar() {
  return (
    <>
   <div className="py md:fixed w-full left-0 top-0 z-[999999]">
   <Navbar fluid rounded className="bg-black rounded-none text-white flex-nowrap">
        <Navbar.Brand>
          <img
            src={logo}
            className="mr-3 h-6 sm:h-9"
            alt="Rent Cars Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className>
          <Navbar.Link className="text-white font-bold text-sm demo" href="#">Become a rintal </Navbar.Link>
          <Navbar.Link className="text-white font-bold text-sm demo" href="#">Rinatal deals</Navbar.Link>
          <Navbar.Link className="text-white font-bold text-sm demo" href="#">How it work</Navbar.Link>
          <button className="btn">Sign In</button>
          <button className="btn bg-yellow-300 hover:bg-yellow-500">Sign Up</button>
        </Navbar.Collapse>
      </Navbar>
   </div>
    </>
  );
}
