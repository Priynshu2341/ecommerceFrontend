
import ProductCard from "./ProductCard";
import "../../styles/homepage/product.css"
import { HomePageHeader } from "./HomePageHeader";
import { useSelector } from "react-redux";



function HomePage({products}){

    const cart = useSelector((state) => state.cart);
    const loading = cart.loading;
    const error = cart.error;

    if(loading) return <p> Loading Products... </p>
    if(error) return <p>{error}</p>

    return (
     <>
        <HomePageHeader  />
        <div className="products-container">
        {products.map ( product => (
        <ProductCard key={product.id} product={product}  />
        ))}
        </div>
     </>
       
    );
};
export default HomePage;