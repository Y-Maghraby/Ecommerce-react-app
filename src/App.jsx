import { Outlet } from "react-router"
import NavSection from './comonents/Navbar/NavSection.jsx'
import Footer from "./comonents/Footer.jsx"
import "./App.css"



function App() {
  

  return (
    <>
    <NavSection/>
    <div className=" min-vh-100 ">
    <Outlet/>
    </div>
     <Footer/>
    </>
  )
}

export default App
