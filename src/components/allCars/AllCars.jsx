/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import ReactPaginate from "react-paginate";
import Card from "../Card/Card";
import Loading from "../loading/Loading";

export default function AllCars() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 24;
  const pagesVisited = pageNumber * productsPerPage;
  const [searchInput, setSearchInput] = useState("");
const [originalProducts , setOriginalProducts] = useState([])


  // Calculate the total number of pages
  const pageCount = Math.ceil(filteredProducts.length / productsPerPage);

  // Handle page change
  const handlePageClick = (e) => {
    setPageNumber(e.selected);
  };

  async function getAllData() {
    try {
      const { data } = await axios.get("https://myfakeapi.com/api/cars/");
      setProducts(data.cars);
    } catch (error) {
      toast.error(error.message);
    }
  }


  async function originalData() {
    try {
      const { data } = await axios.get("https://myfakeapi.com/api/cars/");
      setOriginalProducts(data.cars);
    } catch (error) {
      toast.error(error.message);
    }
  }





  useEffect(() => {
    getAllData();
  }, []);


useEffect(()=>{
  originalData()

},[])


useEffect(()=>{
 setFilteredProducts(originalProducts)
}, [originalProducts])


function handleSearch(e){
  const inputValue = e.target.value.toLowerCase()
  setSearchInput(inputValue)

if (inputValue === "") {
  setFilteredProducts(originalProducts)
  setProducts(originalProducts)
  setPageNumber(0)

}
else{

  const newProducts = filteredProducts.filter(product=> product.car.toLowerCase().includes(inputValue))

  setFilteredProducts(newProducts)
  setProducts(newProducts)
  setPageNumber(0)
}
}





  return (
    <>
      <div className="container">

        
        <div className="links py-8">
          <Link
            className="text-blue-600 border-b-2 border-b-blue-700"
            to="/home"
          >
            {" "}
            Home
          </Link>{" "}
          /{" "}
          <Link
            className="text-blue-600 border-b-2 border-b-blue-700"
            to="/home"
          >
            {" "}
            Cars
          </Link>{" "}
          / <Link> Car Details</Link>
        </div>

        {/*  Search input */}
        <div className="search-box flex justify-between items-center rounded-md overflow-hidden w-[70%] mx-auto border-[1px] border-gray-700 mb-5">
          <div className="icon px-3 bg-gray-800 h-10 flex justify-center items-center">
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <input
            className="flex-1 border-none"
            type="text"
            placeholder="Search By Car Model"
            name="carModel"
            value={searchInput}
            onChange={ (e)=>{handleSearch(e)}}
            
            
          />
          <button className="btn h-10">Search</button>
        </div>

        {/*  Search input */}

     {filteredProducts.length === 0 ? <Loading/> : <>
     
      <div className="call-cards-show grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {filteredProducts
            .slice(pagesVisited, pagesVisited + productsPerPage)
            .map((product) => (
              <Card key={product.id} carInfo={product} />
            ))}
        </div>
     
     </>}

        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"flex justify-center mt-8 space-x-2"}
          previousLinkClassName={
            "px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          }
          nextLinkClassName={"px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"}
          disabledClassName={"opacity-50 cursor-not-allowed"}
          activeClassName={"bg-blue-500 text-white rounded"}
          pageClassName={"px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"}
        />
      </div>
    </>
  );
}
