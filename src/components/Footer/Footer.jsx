import "./footer.module.css";
import footerlogo from "../../assets/imges/footer/logo-footer.png";
export default function Footer() {
  return (
    <div className="footer bg-gray-900 text-white p-5 relative">
      <div className="parent-box grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center mb-8">
        <div className="box-one space-y-4 flex flex-col items-center">
          <img src={footerlogo} alt="footer-logo" />

          <div className="flex items-center gap-3">
            <i className="fa-solid fa-location-dot"></i>
            <div>
              <p>25566 Hc 1,Glenallen, </p>
              <p>Alaska, 99588, USA </p>
            </div>
          </div>

          <div>
            <i className="fa-solid fa-phone mr-2"></i>
            <span>+603 4784 273 12</span>
          </div>

          <div>
            <i className="fa-solid fa-envelope mr-2"></i>
            <span>rentcars@gmail.com</span>
          </div>
        </div>
        <div className="box-two">
          <h2 className="font-bold text-lg mb-3">Our Products</h2>
          <ul className="space-y-3">
            <li>
              <a href="#">Carrers</a>
            </li>
            <li>
              <a href="#">Cars</a>
            </li>
            <li>
              <a href="#">Packages</a>
            </li>
            <li>
              <a href="#">Priceline</a>
            </li>
          </ul>
        </div>

        <div className="box-three">
          <h2 className="font-bold text-lg mb-3">About Rent Cars</h2>
          <ul className="space-y-3">
            <li>
              <a href="#">Why Choose Us</a>
            </li>
            <li>
              <a href="#">Our Story</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
            <li>
              <a href="#">Press Center</a>
            </li>
            <li>
              <a href="#">Advertise</a>
            </li>
          </ul>
        </div>

        <div className="box-four">
          <h2 className="font-bold text-lg mb-3">Resources</h2>
          <ul className="space-y-3">
            <li>
              <a href="#">Download</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Guides</a>
            </li>
            <li>
              <a href="#">Partner Network</a>
            </li>
            <li>
              <a href="#">Cruises</a>
            </li>
            <li>
              <a href="#">Developer</a>
            </li>
          </ul>
        </div>

        <div className="box-five flex flex-col items-center">
          <h2 className="font-bold text-lg mb-3 text-start"> Follow Us</h2>
          <ul className="flex gap-3">
            <li className="border-2 rounded-full size-8 flex justify-center items-center">
              <i className="fa-brands fa-facebook"></i>
            </li>
            <li className="border-2 rounded-full size-8 flex justify-center items-center">
              <i className="fa-brands fa-x-twitter"></i>
            </li>
            <li className="border-2 rounded-full size-8 flex justify-center items-center">
              <i className="fa-brands fa-instagram"></i>
            </li>
          </ul>
        </div>
      </div>

      <p className="h-1 bg-white"></p>
      <p className="mt-4 mb-4 text-center">
        Copyright 2025 ・ Rentcars, All Rights Reserved
      </p>
    </div>
  );
}
