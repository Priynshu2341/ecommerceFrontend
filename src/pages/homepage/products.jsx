import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";
import { addToCart } from "../../api/productApi";
import "../../styles/homepage/product.css";

const ProductCard = ({ product }) => {
  const imageUrl = `http://localhost:8080/${product.image}`;

  const [quantity, setQuantity] = useState(1);
  const { token } = useAuth();
  const navigate = useNavigate();

  async function handleAddToCart() {
    if (!token) {
      navigate("/login");
      return;
    }

    await addToCart({
      productId: product.id,
      quantity: quantity,
    });
  }

  return (
    <div className="product-card">
      <img src={imageUrl} alt={product.name} />
      <h4>{product.name}</h4>
      <p>⭐ {product.rating.stars} ({product.rating.count})</p>
      <strong>${(product.priceCents / 100).toFixed(2)}</strong>

      
      <div className="quantity-row">
        <label>Qty:</label>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {[1,2,3,4,5,6,7,8,9].map(q => (
            <option key={q} value={q}>{q}</option>
          ))}
        </select>
      </div>

      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
