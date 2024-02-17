import {Link} from "react-router-dom"

const btnText = "sign up for free"
const title = "Shop Anytime Anywhere"
const desc = "Take shop on your any device whith our app & learn all time what you want. just downlod &install & start to learn"

function AppSection() {
  return (
    <div className="app-section padding-tb">
        <div className="container">
            <div className="section-header text-center ">
                <Link to="/sign-up" className="lab-btn mb-4">{btnText}</Link>
                <h2 className="title">{title}</h2>
                <p>{desc}</p>
            </div>

            <div className="section-wrapper">
                <ul className="lab-ul">
                    <li><a href="#" > <img src="../../../src/assets/images/app/01.jpg"/></a></li>
                    <li><a href="#" > <img src="../../../src/assets/images/app/02.jpg"/></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default AppSection