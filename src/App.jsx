/* eslint-disable no-unused-vars */
import { Toaster } from "react-hot-toast";
import CardSlider from "./components/cardSlider/CardSlider";
import Main from "./components/main/Main";
import MyNavbar from "./components/Navbar/MyNavbar";
import SearchInput from "./components/searchInput/SearchInput";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import AllCars from "./components/allCars/AllCars";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import CarDetails from "./components/carDetails/CarDetails";
import NotFound from "./components/notfound/NotFound";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "allcars", element: <AllCars />},
        { path: "cardetails/:id", element: <CarDetails /> },
        { path: "*", element: <NotFound/> },
      ],
    },
   
  ]);

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>

      <div className="fixed top-3 z-[9999999999]">
        <Toaster
          toastOptions={{
            className: "",
            style: {
              border: "1px solid #713200",
              padding: "16px",
              color: "#713200",
              background: "red",
              position: "top-center",
            },
          }}
        />
      </div>
    </>
  );
}

export default App;
