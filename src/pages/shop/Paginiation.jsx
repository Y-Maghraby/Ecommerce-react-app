/* eslint-disable react/prop-types */


const Paginiation = ({productsPerPage,totalProducts,paginite,activePage}) => {
    const pageNumber = [];
    for(let i = 1; i<=Math.ceil(totalProducts / productsPerPage);i++){
        pageNumber.push(i)
    }
  return (
    <ul className="default-pagination lab-ul">
    <li>
        <a href="#" onClick={()=>{
            if(activePage < pageNumber.length){
                paginite(activePage -1)
            }
        }}>
        <i className="icofont-rounded-left"></i>
        </a>
    </li>
    {
        pageNumber.map((number)=>(
            <li key={number} className={`page-item ${number === activePage ? "bg-warning" : ""}`}>
                <button onClick={()=>paginite(number)} className="bg-transparent">{number}</button>
            </li>
        ))
    }
    <li>
    <a href="#"onClick={()=>{
        if(activePage < pageNumber.length){
            paginite(activePage + 1)
        }
    }}>
    <i className="icofont-rounded-right"></i>
    </a>
</li>
    </ul>
  )
}

export default Paginiation