
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/home/Home.jsx'
import Shop from './pages/shop/Shop.jsx'
import About from './pages/about/About.jsx'
import Blog from './pages/blog/Blog.jsx'
import Contact from './pages/contact/Contact.jsx'
import CartPage from './pages/shop/CartPage.jsx'



import 'swiper/css';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';


import {
    createHashRouter,
    RouterProvider,
  } from "react-router-dom";
import SingleProduct from './pages/shop/SingleProduct.jsx'
import SingleBlog from './pages/blog/SingleBlog.jsx'
import AuthProvider from './context/AuthProvider.jsx'
import PrivateRoute from './privatePoute/PrivateRoute.jsx'
import Login from './comonents/Login.jsx'
import SignUp from './comonents/SignUp.jsx'
  const router = createHashRouter([
    {
      path: "/",
      element: <App/>,
      children :[{
        path:"/",
        element:<Home/>
      },
      {
        path:"/shop",
        element:<Shop/>,
      },
      {
        path:"/shop/:id",
        element:<SingleProduct/>
      },
      {
        path:"/blog",
        element:<Blog/>,
      },
      {
        path:"/blog/:id",
        element:<SingleBlog/>
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },{
        path:"/cart-page",
        element:<PrivateRoute><CartPage/></PrivateRoute>
      }
    ]
    },
    {
      path:"/login",
      element:<Login/>
    },{
      path:"/sign-up",
      element:<SignUp/>
    }
  ]);
ReactDOM.createRoot(document.getElementById('root')).render( 
   <AuthProvider> <RouterProvider router={router}/></AuthProvider>
);
