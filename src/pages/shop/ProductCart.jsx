/* eslint-disable react/prop-types */
import {Link} from "react-router-dom"
import Ratting from "../../comonents/Ratting"

const ProductCart = ({GridList , products}) => {
    console.log(products);
  return (
    <div className={`shop-product-wrap row justify-content-center ${GridList ? "grid" : "list"}`}>
        {
            products.map((prod,i)=>(<div key={i}
                className="col-lg-4 col-12">
            {/* grid  */}
                    <div className="product-item">
                        <div className="product-thumb">
                            <div className="pro-thumb">
                                <img src={prod.img} alt=""/>
                            </div>
                            <div className="product-action-link">
                                <Link to={`/shop/${prod.id}`}><i className="icofont-eye"></i></Link>
                                <a href="#"><i className="icofont-heart"></i></a>
                                <Link to="/cart-page"><i className="icofont-cart-alt"></i></Link>
                            </div>
                        </div>

                    <div className="product-content">
                        <h5><Link to={`/shop/${prod.id}`}>{prod.name}</Link></h5>
                        <p className="productRating"><Ratting/></p>
                        <h6>${prod.price}</h6>
                    </div>
                    </div>
                    {/* list  */}
                    <div className="product-list-item">
                        <div className="product-thumb">
                            <div className="pro-thumb">
                                <img src={prod.img} alt=""/>
                            </div>
                            <div className="product-action-link">
                                <Link to={`/shop/${prod.id}`}><i className="icofont-eye"></i></Link>
                                <a href="#"><i className="icofont-heart"></i></a>
                                <Link to="/cart-page"><i className="icofont-cart-alt"></i></Link>
                            </div>
                        </div>

                    <div className="product-content">
                        <h5><Link to={`/shop/${prod.id}`}>{prod.name}</Link></h5>
                        <p className="productRating"><Ratting/></p>
                        <h6>${prod.price}</h6>
                    </div>
                    </div>

                </div>))
        }
    </div>
  )
}

export default ProductCart