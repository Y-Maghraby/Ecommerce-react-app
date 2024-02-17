import { useState } from "react"
import {Button, Modal} from "react-bootstrap"
import "../../comonents/Modal.css"
import{useLocation ,useNavigate} from "react-router-dom"

const CheckOut = () => {
    const [show,setShow] = useState(false);
    const [activeTab,setActiveTab] = useState("visa");

    const handleTab = (tabId)=>{
        setActiveTab(tabId)
    }

    const handleShow = ()=>setShow(true);
    const handleClose = ()=>setShow(false)

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleConfirm = () =>{
        alert("Your Order is Placed Successfully");
        localStorage.removeItem("cart");
        navigate(from,{replace:true})
    }

  return (
    <div className="modalCard">
        <Button varient="primary" className="p-2" onClick={handleShow}>proccessed to checkout</Button>

        <Modal show={show} onHide={handleClose} animation={false} className="modal fade" centered>
            <div className="modal-dialog">
                <h5 className="px-3 mb-3 ">Select Payment Method</h5>
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="tabs mt-3">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className={`nav-link ${activeTab === "visa" ? "active" : ""}`}
                                id="visa-tab" data-toggle="tab" role="tab" aria-controls="visa" onClick={()=> handleTab("visa")} href="#visa"> <i className="icofont-visa"></i></a>
                            </li>
                            <li className="nav-item" role="presentation">
                            <a className={`nav-link ${activeTab === "paypal" ? "active" : ""}`}
                            id="paypal-tab" data-toggle="tab" role="tab" aria-controls="paypal" onClick={()=> handleTab("paypal")} href="#paypal"> <i className="icofont-paypal" ></i></a>
                        </li>
                            
                            </ul>
                          <div className="tab-content" id="myTabContent">
                            <div className={`tab-pane fade ${activeTab === "visa" ? "show active" : ""}`}
                            id="visa" role="tabpanel" aria-labelledby="visa-tab">
                               
                            {/* visa content */}
                                <div className="mt-4 mx-4">
                                    <div className="text-center">
                                        <h5>Credit Card</h5>
                                    </div>
                                    <div className="form mt-3">
                                        <div className="inputbox">
                                            <input type="text" name="name" id="name" className="form-control" required/>
                                            <span>Cardholder Name</span>
                                        </div>
                                        <div className="inputbox">
                                            <input type="text" name="number" id="number" min="1" max="999" className="form-control" required/>
                                            <span>Card Namber</span> <i className="fa fa-eye"></i>
                                        </div>
                                        <div className="d-flex flex-row">
                                        <div className="inputbox">
                                        <input type="text" name="number" id="number" min="1" max="999" className="form-control" required/>
                                        <span>Expiration Date</span> 
                                    </div>
                                    <div className="inputbox">
                                            <input type="text" name="number" id="number" min="1" max="999" className="form-control" required/>
                                            <span>CVV</span> 
                                        </div>
                                        </div>
                                        <div className="px-5 pay">
                                            <button className="btn btn-success btn-block" onClick={()=> handleConfirm()}>Order</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                             {/* paypal content */}
                             <div className={`tab-pane fade ${activeTab === "paypal" ? "show active" : ""}`}
                             id="paypal" role="tabpanel" aria-labelledby="paypal-tab">
                             <div className="mt-4 mx-4">
                             <div className="text-center">
                                 <h5>Paypal Account Info</h5>
                             </div>
                             <div className="form mt-3">
                                 <div className="inputbox">
                                     <input type="text" name="name" id="name" className="form-control" required/>
                                     <span>Enter Your Email</span>
                                 </div>
                                 <div className="inputbox">
                                     <input type="text" name="number" id="number" min="1" max="999" className="form-control" required/>
                                     <span>Your Name</span> <i className="fa fa-eye"></i>
                                 </div>
                                 <div className="d-flex flex-row">
                                 <div className="inputbox">
                                 <input type="text" name="number" id="number" min="1" max="999" className="form-control" required/>
                                 <span>Extra Info</span> 
                             </div>
                             <div className="inputbox">
                                 <input type="text" name="number" id="number" min="1" max="999" className="form-control" required/>
                                 <span></span> 
                             </div>
                                 </div>
                                 <div className="px-5 pay">
                                     <button className="btn btn-primary btn-block" onClick={()=> handleConfirm()}>Add Paypal</button>
                                 </div>
                             </div>
                         </div>
                             </div>
                          </div> 

                          {/*/  description */}
                            <p className="mt-3 px-4 p-Disclaimer">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text </p>

                        </div>
                    </div>
                </div>
            </div>

        </Modal>
    </div>
  )
}

export default CheckOut