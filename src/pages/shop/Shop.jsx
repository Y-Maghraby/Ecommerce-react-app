import { useState } from "react"
import BannerPage from "../../comonents/BannerPage"
import ProductCart from "./ProductCart"
import Data from "../../products.json"
import Paginiation from "./Paginiation"
import Search from "./Search"
import ShopCate from "./ShopCate"
import PopPosts from "./PopPosts"
import Tages from "./Tages"


const showResult = "Showing 01 - 12 of 139 Results"


const Shop = () => {
  const [GridList,setGridList] = useState(true)
  const [products,setproducts] = useState(Data)

  // pagination 
const [currentPage ,setCurrentPage] = useState(1);
const productsPerPage = 12;

const indexOfLastProduct = currentPage * productsPerPage;
const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
const currentProducts = products.slice(indexOfFirstProduct,indexOfLastProduct)

const paginite = (pageNumber) => {
  setCurrentPage(pageNumber)
}


// fillter category 
const [selectedCtegory , setSelectedCtegory] = useState("all");
const menuItem = [...new Set(Data.map((item)=> item.category))];

const filterItem = (currcat)=>{
  const newItem = Data.filter((newVal)=>{
    return newVal.category === currcat;
  })
  setSelectedCtegory(currcat);
  setproducts(newItem)
}

  return (
    <div>
      <BannerPage title="Our Shop Page" curPage="shop"/>
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-lg-8 col-12">
              <article>
                <div className="shop-title d-flex flex-wrap justify-content-between  ">
                  <p>{showResult}</p>
                  <div className={`product-view-mode ${GridList ? "gridActive" : "listActive"}`}>
                    <a className="grid" onClick={()=> setGridList(!GridList)}>
                      <i className="icofont-ghost"></i>
                    </a>
                    <a className="list" onClick={()=> setGridList(!GridList)}>
                    <i className="icofont-listine-dots"></i>
                  </a>
                  </div>
                </div>

                <div>
                  <ProductCart GridList={GridList} products ={currentProducts}/>
                </div>
                <Paginiation
                productsPerPage={productsPerPage}
                totalProducts = {products.length}
                paginite={paginite}
                activePage={currentPage}/>
              </article>
            </div>

            <div className="col-lg-4 col-12"> 
              <aside>
                <Search 
                products={products} GridList={GridList}/>

                <ShopCate 
                filterItem={filterItem}
                setItem={setproducts}
                menuItem={menuItem}
                setproducts={setproducts}
                selectedCtegory={selectedCtegory}/>

                <PopPosts/>
                <Tages/>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop