import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import BannerPage from "../../comonents/BannerPage";
import dleImg from "../../assets/images/shop/del.png"
import CheckOut from "./CheckOut";

 

const CartPage = () => {
    const [cartItem,setCartItem] = useState([]);

    useEffect(()=>{
        const storedItems = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItem(storedItems);

    },[])

    // calc items 
    const calcPrices = (item)=>{
        return item.price * item.quantity;
    }

    // handle quantity 
    const handleQuantity =(item)=>{
        item.quantity += 1;
        setCartItem([...cartItem]);

        // update localstorage 
    localStorage.setItem("cart" , JSON.stringify(cartItem));
    }
    const handleDecrease = (item)=>{
        if(item.quantity > 1){
            item.quantity -= 1;

            localStorage.setItem("cart" , JSON.stringify(cartItem));
        }
    }

    

    // remove items 
    const removeItems= (item)=>{
        const updateCart = cartItem.filter((cartItem)=> cartItem.id !== item.id);

        setCartItem(updateCart);
       updateLocalStorage(updateCart) 

    }
    const updateLocalStorage = (cart) =>{
        localStorage.setItem("cart" , JSON.stringify(cart))
    }

    // cart subtotal 
    const cartSubtotal = cartItem.reduce((total,item)=>{
        return total + calcPrices(item);
    },0)

    // order total 
    const orderTotal = cartSubtotal;


  return (
    <div>
        <BannerPage title={"Shop Cart"} curPage={"cart page"}/>

        <div className="shop-cart padding-tb">
            <div className="container">
                <div className="section-wrapper">
                    {/* cart top */}
                    <div className="cart-top">
                        <table>
                            <thead>
                                <tr>
                                    <th className="cat-product">product</th>
                                    <th className="cat-price">price</th>
                                    <th className="cat-quantity">quantity</th>
                                    <th className="cat-total">total</th>
                                    <th className="cat-edit">edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartItem.map((item,i)=>(
                                        <tr key={i} >
                                            <td className="product-item cat-product">
                                                <div className="p-thumb">
                                                    <Link to="/shop"><img src={item.img} alt=""/></Link>
                                                </div>
                                                <div className="p-content">
                                                    <Link to="/shop">{item.name}</Link>
                                                </div>
                                            </td>
                                            <td className="cat-price">${item.price}</td>
                                            <td className="cat-quantity">
                                                <div className="cart-plus-minus">
                                                    <div className="dec qtybutton" onClick={()=> handleDecrease(item)}>-</div>
                                                    <input type="text" className="cart-plus-minus-box" name="qtybutton" value={item.quantity}/>
                                                    <div className="inc qtybutton" onClick={()=> handleQuantity(item)}>
                                                    +
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="cat-topprice">${calcPrices(item)}</td>
                                             <td className="cart-edit">
                                                <a href="#" onClick={()=> removeItems(item)}>
                                                    <img src={dleImg} alt=""/>
                                                </a>
                                             </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>

                     {/* cart bottom */}
                     <div className="cart-bottom">
                        <div className="cart-checkout-box">
                            <form className="coupon">
                                <input className="cart-page-input-text" type="text" name="coupon" id="coupon" placeholder ="Coupon code..."/>
                                <input type="submit" value="Applay Coupon"/>
                            </form>
                            <form className="cart-checkout">
                                <input type="submit" value="Update Value"/>
                                <div> <CheckOut/></div>
                            </form>
                        </div>
                        
                        <div className="shiping-box">
                            <div className="row">
                                <div className="col-md-6 col-12">
                                    <div className="calculate-shiping">
                                        <h3> Calculate  Shipping</h3>
                                        <div className="outline-select">
                                            <select>
                                                <option value="eg">Eygpt (EG)</option>
                                                <option value="su">Suadi Arabia (SU)</option>
                                                <option value="uk">United Kingdom (UK)</option>
                                                <option value="us">United State (US)</option>
                                            </select>
                                            <span className="select-icon">
                                                <i className="icofont-rounded-down"> </i>
                                            </span>
                                        </div>
                                        <div className="outline-select shipping-select">
                                        <select>
                                            <option value="eg">Cairo</option>
                                            <option value="su">Makka</option>
                                            <option value="uk">London</option>
                                            <option value="us">New York</option>
                                        </select>
                                        <span className="select-icon">
                                            <i className="icofont-rounded-down"> </i>
                                        </span>
                                    </div>
                                    <input type="text" name="postalCode" id="postalCode" placeholder="postalCode/zip" className="cart-page-input-text"/>
                                    <button type="submit">Update Adress</button>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="cart-overview">
                                        <h3>Cart Total</h3>
                                        <ul className="lab-ul">
                                            <li>
                                                <span className="pull-left">Cart Subtotal</span>
                                                <p className="pull-right">$ {cartSubtotal}</p>
                                            </li>
                                            <li>
                                            <span className="pull-left">Shipping and hundling</span>
                                            <p className="pull-right">Free Shipping</p>
                                        </li>
                                        <li>
                                        <span className="pull-left">Order Total</span>
                                        <p className="pull-right">$ {orderTotal.toFixed(2)}</p>
                                    </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                     </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartPage