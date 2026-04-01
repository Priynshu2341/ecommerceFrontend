import "../../styles/shared/header.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";
import { useState } from "react";
import { useSelector } from "react-redux"

export function HomePageHeader( ) {
  const [searchText,setSearchText] = useState("");
  const [searchProducts,setSearchProducts] = useState([]);

  const { token, logout } = useAuth();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
 


  function handleLogout() {
    logout();
  }

   

  const cartCount = !token ? 0 : cart.totalQuantity

  return (
    <div className="header">
      <div className="left-section">
        <Link to="/" className="header-link">
          <img className="logo" src="/images/logo-white.png" alt="Logo" />
          <img className="mobile-logo" src="/images/mobile-logo-white.png" alt="Mobile Logo" />
        </Link>
      </div>

      <div className="middle-section">
        <input className="search-bar"
         type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          />
        <button  className="search-button">
          <img className="search-icon" src="/images/icons/search-icon.png" alt="Search" />
        </button>
      </div>

      <div className="right-section">
        {token ? (
          <button className="logout-link header-link" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <Link className="login-link header-link" to="/login">
            Login
          </Link>
        )}

        <Link className="orders-link header-link" to="/orders">
          Orders
        </Link>

        <Link className="cart-link header-link" to="/checkout">
          <img className="cart-icon" src="/images/icons/cart-icon.png" alt="Cart" />
          <div className="cart-quantity">{cartCount}</div>
          <div className="cart-text">Cart</div>
        </Link>
      </div>
    </div>
  );
}