import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useLocation, useNavigate } from "react-router";
import{Link} from "react-router-dom"


const socialList = [ { iconName: 'icofont-facebook', siteLink: '#', className: 'facebook', }, { iconName: 'icofont-twitter', siteLink: '#', className: 'twitter', }, { iconName: 'icofont-linkedin', siteLink: '#', className: 'linkedin', }, { iconName: 'icofont-instagram', siteLink: '#', className: 'instagram', }, { iconName: 'icofont-pinterest', siteLink: '#', className: 'pinterest', }, ]
const title = "Login";
const btnText = "Login Now";
const soicalTitle = "Login with Soical Media"

const Login = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const {signWithGmail,login} = useContext(AuthContext);
    const location = useLocation();
    const Navigate = useNavigate();
    
    const from = location.state?.from?.pathname || "/";

    const handleLogin = (e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email,password).then((result)=>{
            const user = result.user;
            alert("login successfully")
            Navigate(from,{replace: true})
        }).catch((error)=>{
            const errorMsg = error.message;
            setErrorMessage("please provide valid email & password")
        })
    }

    const handleReister=()=>{
        signWithGmail().then((result)=>{
            const user = result.user;
            Navigate(from,{replace: true});
        }).catch((error)=>{
            const errorMsg = error.message;
            setErrorMessage("please provide valid email & password")
        })
    }

  return (
    <div>
        <div className="login-section padding-tb section-bg">
            <div className="container">
                <div className="account-wrapper">
                    <h3 className="title">{title}</h3>
                    <form className="account-form" onSubmit={handleLogin}>
                        <div className="form-group">
                            <input type="email" name="email" id="email" placeholder="Email Address * " required/>
                        </div>
                        <div className="form-group">
                        <input type="password" name="password" id="password" placeholder="password  * " required/>
                    </div>

                    <div className="error-message text-danger mb-1">{errorMessage}</div>

                    <div className="form-group">
                        <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                            <div className="checkgroup">
                                <input type="checkbox" name="remember" id="remember"/>
                                <label htmlFor="remember">Remember Me</label>
                            </div>
                            <Link to="forgetpass">Forget Password</Link>
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="d-block lab-btn">
                            <span>{btnText}</span>
                        </button>
                    </div>
                    </form>
                    <div className="account-bottom">
                        <span className="d-block cate pt-10">
                            Don't Have an Account? <Link to="/sign-up">Sign Up</Link>
                        </span>
                        <span className="or"><span>or</span></span>

                        <h5 className="subtitle">{soicalTitle}</h5>
                        <ul className="lab-ul social-icons justify-content-center ">
                            <li>
                                <a href="#" className="github" onClick={handleReister}><i className="icofont-github"></i></a>
                            </li>
                            <li>
                                <a href="#" className="facebook"><i className="icofont-facebook"></i></a>
                            </li>
                            <li>
                                <a href="#" className="twitter"><i className="icofont-twitter"></i></a>
                            </li>
                            <li>
                                <a href="#" className="linkedin"><i className="icofont-linkedin"></i></a>
                            </li>
                            <li>
                                <a href="#" className="instagram"><i className="icofont-instagram"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login