import { useEffect,useState } from "react";
import { getCart, getProducts } from "../../api/productApi";
import ProductCard from "./products";
import "../../styles/homepage/product.css"
import { HomePageHeader } from "./HomePageHeader";



const HomePage = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cart, setCart] = useState([]);


    useEffect( () => {
        getProducts()
        .then((data) =>{
            console.log("Product Api Response", data)
            setProducts(data);
        })
        .catch(() => setError("Failed to Load Products"))
        .finally(()=> setLoading(false));

        const token = localStorage.getItem("token");

        if(token){
            getCart()
            .then((data)=>{
                console.log("User Cart",data);
                setCart(data);
            })
            
        }
    },[]) 

    if(loading) return <p> Loading Products... </p>
    if(error) return <p>{error}</p>

    return (
     <>
        <HomePageHeader cart={cart} />
        <div className="products-container">
        {products.map( product => (
        <ProductCard key={product.id} product={product} />
        ))}
        </div>
     </>
       
    );
};
export default HomePage;