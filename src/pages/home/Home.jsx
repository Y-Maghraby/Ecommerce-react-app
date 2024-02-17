import AboutUs from "./AboutUs"
import AllProducts from "./AllProducts"
import AppSection from "./AppSection"
import Banner from "./Banner"
import HomeCatogry from "./HomeCatogry"
import HomeSponser from "./HomeSponser"
import LocationSprade from "./LocationSprade"
import Register from "./Register"


const Home = () => {
  return (
    <div>
    <Banner/>
    <HomeCatogry/>
    <AllProducts/>
    <Register/>
    <LocationSprade/>
    <AboutUs/>
    <AppSection/>
    <HomeSponser/>
    </div>
  )
}

export default Home