import "./contact.module.css"
import google from "../../assets/imges/landing-page/sec-7/andriod.png"
import apple from "../../assets/imges/landing-page/sec-7/ios.png"
import iphone from "../../assets/imges/landing-page/sec-7/iPhone-14.png"
export default function Contact() {
  return (
    <div className="py-9 flex flex-wrap contact-box container mt-5 md:w-[80%] justify-between px-6">
      <div className="contact-form w-full lg:w-auto">
        <h2 className="text-xl font-bold mb-5">Download Rentcars App for <span className="text-blue-700">FREE</span>        </h2>
        <p className="mb-4">For faster, easier booking and exclusive deals.</p>
        <div className="contact-logo flex gap-5">
           <img src={google} alt="google store photo" />
           <img src={apple} alt="apple store photo" />
        </div>

      <form className="space-y-4 mt-9 flex flex-col">
        <div className="">
            <input className="form-control" type="text" name="useName" placeholder="Name" />
        </div>
        <div className="">
            <input className="form-control" type="tel" name="usePhone" placeholder="Phone" />
        </div>
        <div className="">
            <input className="form-control" type="email" name="useName" placeholder="Email" />
        </div>
        <button className="btn" type="submit">Submit</button>
      </form>


      </div>



      <div className="img-contact relative">
        <img className=" relative top-32" src={iphone} alt="iphone imge in car" />
      </div>
    </div>
  )
}
