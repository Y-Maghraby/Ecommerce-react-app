/* eslint-disable react/prop-types */
import Data from "../../products.json"

const ShopCate = ({filterItem, setItem, menuItem,setproducts,selectedCtegory}) => {
  
  
    return (
    <>
        <div className="widget-header">
            <h5 className="ms-2">All Category</h5>
        </div>
        <div>
        <button 
        onClick={()=> setproducts(Data)}
        className={`m-2 ${selectedCtegory === "all" ? "bg-warning" : ""}`}>All</button>
            {
                menuItem.map((val,i)=>{
                    return (
                        <button key={i}
                        className={`m-2 ${selectedCtegory === val ? "bg-warning" : ""}`}
                        onClick={()=>filterItem(val)}>{val}</button>
                    )
                })
            }
        </div>
    </>
  )
}

export default ShopCate