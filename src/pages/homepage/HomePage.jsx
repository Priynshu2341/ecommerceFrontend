
import ProductCard from "./products";
import "../../styles/homepage/product.css"
import { HomePageHeader } from "./HomePageHeader";



const HomePage = ( {products,cart,loading,error, refreshCart }) => {

    if(loading) return <p> Loading Products... </p>
    if(error) return <p>{error}</p>

    return (
     <>
        <HomePageHeader cart={cart} />
        <div className="products-container">
        {products.map ( product => (
        <ProductCard key={product.id} product={product} refreshCart = {refreshCart} />
        ))}
        </div>
     </>
       
    );
};
export default HomePage;