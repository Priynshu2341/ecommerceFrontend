import { useState, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";
import "../../styles/homepage/product.css";
import { addItemToCart } from "../../store/cartThunks";
import { useDispatch } from "react-redux";

function throttle(fn, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

const ProductCard = ({ product }) => {
  const imageUrl = `https://ecommerce-backend1-l8fn.onrender.com/${product.image}`;

  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const { accessToken } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = useCallback(() => {
    if (!accessToken) {
      navigate("/login");
      return;
    }

    dispatch(
      addItemToCart({
        productId: product.id,
        quantity: quantity,
      })
    );

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  }, [accessToken, navigate, dispatch, product.id, quantity]);

  
  const throttledAddToCart = useMemo(
    () => throttle(handleAddToCart, 500),
    [handleAddToCart]
  );

  return (
    <div className="product-card">
      <img className="img" src={imageUrl} alt={product.name} />
      <h4 className="name-text">{product.name}</h4>

      <p className="stars">
        ⭐ {product.rating.stars} ({product.rating.count})
      </p>

      <strong className="price-text">
        ${(product.priceCents / 100).toFixed(2)}
      </strong>

      <div className="quantity-row">
        <label className="qty-text">Qty:</label>

        <select
          className="qty-select"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {[1,2,3,4,5,6,7,8,9].map((q) => (
            <option key={q} value={q}>
              {q}
            </option>
          ))}
        </select>

        {added && <p> {"\u2713"} Added </p>}
      </div>

      <button
        className="add-to-cart-btn"
        onClick={throttledAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;