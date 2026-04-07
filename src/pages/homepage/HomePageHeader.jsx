import "../../styles/shared/header.css";
import { Link ,useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchCart} from "../../store/cartThunks"

export function HomePageHeader() {
  const [searchText, setSearchText] = useState("");

  const { accessToken , logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
 

  const cart = useSelector((state) => state.cart);

  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("query") || "";
    setSearchText(query);
  }, [location.search]);

  function handleLogout() {
    logout();
  }

  
  function handleSearch() {
    if (!searchText.trim()) return;

    navigate(`/search?query=${encodeURIComponent(searchText)}`);
  }

   function handleKeydown(e){
    if(e.key === "Enter"){
      handleSearch();
    }
    }



  const cartCount = !accessToken ? 0 : cart.totalQuantity;


  return (
    <div className="header">
      <div className="left-section">
        <Link to="/" className="header-link">
        <div className="logo-div">
          <img className="store-flow-logo" src="/images/mobile-logo-white.png"></img>
           <p className="store-flow-text">StoreFlow</p>
        </div>
          <img className="mobile-logo" src="/images/mobile-logo-white.png" alt="Mobile Logo" />
        </Link>
      </div>

      <div className="middle-section">
        <input
          className="search-bar"
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={handleKeydown}
        />

        <button onClick={handleSearch} className="search-button">
          <img className="search-icon" src="/images/icons/search-icon.png" alt="Search" />
        </button>
      </div>

      <div className="right-section">
        {accessToken ? (
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