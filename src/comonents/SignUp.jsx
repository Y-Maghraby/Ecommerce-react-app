import { useContext, useState } from "react";
import {Link, useLocation, useNavigate} from "react-router-dom"
import { AuthContext } from "../context/AuthProvider";


const title = "Register";
const soicalTitle = "Login with soical media";
const btnText = "Signup Now"

const SignUp = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const {signWithGmail,createUser} = useContext(AuthContext);
    const location = useLocation();
    const Navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleSignUp =(e)=>{
         e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if(password !== confirmPassword){
            setErrorMessage("passowrd does't match");
        }else{
            setErrorMessage("")
            createUser(email,password).then((userCredential)=>{
                const user = userCredential.user;
                alert("Account created successfully");
                Navigate(from, {replace: true})
            }).catch((error)=>{
                alert(`${error.message}`)
            })
        }

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
            <form className="account-form" onSubmit={handleSignUp}>
            <div className="form-group">
            <input type="text" name="name" id="name" placeholder="Full Name * " required/>
        </div>  
             <div className="form-group">
                    <input type="email" name="email" id="email" placeholder="Email Address * " required/>
                </div>
                <div className="form-group">
                <input type="password" name="password" id="password" placeholder="password  * " required/>
            </div>
            <div className="form-group">
            <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm password  * " required/>
        </div>
        <div className="error-message text-danger mb-1">{errorMessage}</div>

    
            <div className="form-group">
                <button type="submit" className="d-block lab-btn">
                    <span>{btnText}</span>
                </button>
            </div>
            </form>
            <div className="account-bottom">
                <span className="d-block cate pt-10">
                    Have an Account? <Link to="/login">Login</Link>
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

export default SignUp