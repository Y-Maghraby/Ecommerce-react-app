/* eslint-disable react/prop-types */

import {Link} from "react-router-dom"
import { useState } from "react";


const ProductDisplay = ({item}) => {
    
    const {name,id,price,seller,ratingsCount,quantity,img} = item;

    const [prequantity , setQuantity] = useState(quantity);
    const [coupon,setCoupon] = useState("");
    const [size,setSize] = useState("Select Size");
    const [color , setColor] = useState("Select Color");

    const handleSize = (e)=>{
        setSize(e.target.value)
    } 
    const handleColor =(e)=>{
        setColor(e.target.value)
    }

    const handleDecrease = () =>{
        if(prequantity >1){
            setQuantity(prequantity - 1)
        }
    }
    const handleIncrease = ()=>{
        setQuantity(prequantity + 1)
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        const product = {
            id:id,
            img:img,
            name:name,
            price:price,
            quantity:prequantity,
            size:size,
            color:color,
            coupon:coupon
        }
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

        const existingProductIndex = existingCart.findIndex((item) => item.id === id);

        if(existingProductIndex !== -1){
            existingCart[existingProductIndex].quantity += prequantity;
        }else{
            existingCart.push(product);
        }

        // update local storge 
        localStorage.setItem("cart" , JSON.stringify(existingCart));

        // reset form field 
        setQuantity(1);
        setSize("Select Size");
        setColor("SelectColor");
        setCoupon("");
    }
  return (
    <div>
        <div>
            <h4>{name}</h4>
            <p className="rating">
                <i className="icofont-star"></i>
                <i className="icofont-star"></i>
                <i className="icofont-star"></i>
                <i className="icofont-star"></i>
                <i className="icofont-star"></i>
                <span>{ratingsCount} review</span>
            </p>
            <h4>${price}</h4>
            <h6>{seller}</h6>
            <p>Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn</p>
        </div>
    
        <form onSubmit={handleSubmit}>
           <div className="select-product size">
              <select value={size} onChange={handleSize}>
                <option>Select Size</option>
                <option>SM</option>
                <option>MD</option>
                <option>LG</option>
                <option>XL</option>
                <option>XXL</option>
              </select>
              <i className="icofont-rounded-down"></i>
           </div>
           
           <div className="select-product color">
           <select value={color} onChange={handleColor}>
             <option>Select Color</option>
             <option>pink</option>
             <option>ash</option>
             <option>red</option>
             <option>white</option>
             <option>blue</option>
           </select>
           <i className="icofont-rounded-down"></i>
        </div>

        <div className="cart-plus-minus">
            <div className="dec qtybutton" onClick={handleDecrease}>-</div>
            <input className="cart-plus-minus-box" type="text" name="qtybutton" id="qtybutton" value={prequantity}
            onChange={(e)=>setQuantity(parseInt(e.target.value,10))}/>
            <div className="inc qtybutton" onClick={handleIncrease}>+</div>
        </div>

        <div className="discount-code " >
            <input type="text" placeholder="Enter Discount Code" onChange={(e)=> setCoupon(e.target.value)}/>
        </div>

        <button type="submit" className="lab-btn">
            <span>Add to Cart</span>
        </button>
        <Link to="/cart-page" className="lab-btn bg-primary">
            <span>Check Out</span>
        </Link>
        </form>
        
    </div>
  )
}

export default ProductDisplay