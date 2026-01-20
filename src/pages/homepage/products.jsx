import  "../../styles/homepage/product.css"

const ProductCard = ({ product }) => {
    const imageUrl = `http://localhost:8080/${product.image}`;

    return (
      <div className="product-card">
        <img src={imageUrl} alt={product.name} />
        <h4>{product.name}</h4>
        <p>⭐ {product.rating.stars} ({product.rating.count})</p>
        <strong>${(product.priceCents / 100).toFixed(2)}</strong>
        <button className= "add-to-cart-btn" >Add TO Cart</button>
        </div>
    );
};

export default ProductCard;