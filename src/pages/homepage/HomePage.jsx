import { useEffect,useState } from "react";
import { getProducts } from "../../api/productApi";
import ProductCard from "./products";
import "../../styles/product.css"


const HomePage = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect( () => {
        getProducts()
        .then((data) =>{
            console.log("Product Api Response", data)
            setProducts(data);
        })
        .catch(() => setError("Failed to Load Products"))
        .finally(()=> setLoading(false));
    },[])

    if(loading) return <p> Loading Products... </p>
    if(error) return <p>{error}</p>

    return (
    <div className="products-container">
        {products.map(product => (
        <ProductCard key={product.id} product={product} />
        ))}
    </div>
    );
};
export default HomePage;