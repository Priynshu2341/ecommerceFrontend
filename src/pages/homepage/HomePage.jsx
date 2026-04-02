
import ProductCard from "./ProductCard";
import "../../styles/homepage/product.css"
import { HomePageHeader } from "./HomePageHeader";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../store/productSlice";



function HomePage(){

    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
 

    const productPage = useSelector((state) => state.products);
    const products = productPage.content;
    
    
    if (productPage.error) return <p>{error}</p>


    const pageNumber = productPage.pageNumber;

    console.log(pageNumber);

    function setNewPage(newPage){
      console.log("oage number is ", newPage);
      dispatch(setPage(newPage));
      console.log("sucessfull number is ", newPage);

    }
    

    return (
     <>
        <HomePageHeader  />

         {
          productPage.loading ? (
            
            <div className="loading">
            <div className="spinner"></div>
          </div> 

          
          ) : (
          <div>
           <div className="products-container">
            {products.map ( product => (
            <ProductCard key={product.id} product={product}  />
            ))}
            </div>
            

          <div className="page-btn-div">
            <button disabled={productPage.first}
            onClick={() => setNewPage(pageNumber - 1)}
            
            >Prev</button>

            <button disabled= {productPage.last}
                onClick={() => setNewPage(pageNumber + 1)}
            >Next</button>
        </div>
          </div>
           
         )




               }

     


     </>
       
    );
};
export default HomePage;