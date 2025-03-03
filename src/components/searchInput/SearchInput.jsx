export default function SearchInput() {
  return (
    <>
      <div className="search-box flex justify-between items-center rounded-md overflow-hidden w-[70%] mx-auto border-[1px] border-gray-700 mb-5">
        <div className="icon px-3 bg-gray-800 h-10 flex justify-center items-center">
        <i className="fa-solid fa-location-dot"></i>

        </div>
        <input className="flex-1 border-none" type="text" placeholder="Search By Car Model" name="carModel" />
        <button className="btn h-10">Search</button>
      </div>
    </>
  );
}
