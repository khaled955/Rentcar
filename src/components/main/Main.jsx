import styles from "./main.module.css"
import photo from "../../assets/imges/landing-page/car 2 1.png"
export default function Main() {
  return (
   <>
   <main className="flex flex-col md:flex-row  h-screen items-center justify-between overflow-hidden">
<div className={`${styles.mainText} py-3 h-[100%] md:h-auto`}>
    <h2 className="font-black text-3xl md:w-[40%] mb-6 text-center">Find, book and rent a car <span className="text-red-800">Easily</span></h2>
    <ul className="flex gap-3">
        <li  className="px-2 py-1 bg-black text-white hover:bg-white hover:text-black transition-all duration-300 rounded-full hover:rotate-3">
            <a href="#">
            <i className="fa-brands fa-x-twitter"></i>
            </a>
        </li>
        <li  className="px-2 py-1 bg-black text-white hover:bg-white hover:text-black transition-all duration-300 rounded-full hover:rotate-3">
            <a href="#">
            <i className="fa-brands fa-facebook"></i>
            </a>
        </li>
        <li  className="px-2 py-1 bg-black text-white hover:bg-white hover:text-black transition-all duration-300 rounded-full hover:rotate-3">
            <a href="#">
            <i className="fa-brands fa-youtube"></i>
            </a>
        </li>
        <li  className="px-2 py-1 bg-black text-white hover:bg-white hover:text-black transition-all duration-300 rounded-full hover:rotate-3">
            <a href="#">
            <i className="fa-brands fa-github"></i>
            </a>
        </li>
    </ul>
</div>
<div className={`${styles.mainImg} h-screen -order-1 md:order-[0] py-5`}>
    <img className={`w-[90%] mt-14 ${styles.carImg}`} src={photo} alt="" />
</div>
   </main>
   </>
  )
}
