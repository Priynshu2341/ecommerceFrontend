import ProductCard from "../homepage/ProductCard";
import { useSelector } from "react-redux";

export function SearchContent() {
  const { products, loading, error } = useSelector(
    (state) => state.searchProducts
  );

 
  if (loading) return <p style={{ padding: "20px" }}>Loading...</p>;

  
  if (error) return <p style={{ padding: "20px" }}>Something went wrong</p>;

 
  if (!products.length)
    return <p style={{ padding: "20px" }}>No products found</p>;

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}