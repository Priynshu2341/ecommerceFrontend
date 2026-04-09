import "../../styles/shared/header.css";
import { Link ,useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchCart} from "../../store/cartThunks"

export function HomePageHeader() {
  const [searchText, setSearchText] = useState("");
  const [showSearch,setShowSearch] = useState(false);
  const [menuOpen,setMenuOpen] = useState(false);

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
        </Link>
      </div>

      <div className={`middle-section ${showSearch ? "active" : ""}` }>
        {showSearch && (
        <button className="search-back-btn" onClick={() => setShowSearch(false)}>
          ←
        </button>
      )}
        <input
          className="search-bar"
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={handleKeydown}
        />

        <button onClick={handleSearch} className="search-button">
          🔍
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

      <div className={`right-section-mobile ${showSearch ? "hidden" : ""}`}>

      <svg
        className="search-icon"
        onClick={() => setShowSearch(true)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
    
      >
        <path
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>

      <svg
        className="hamburger-icon"
        onClick={() => setMenuOpen(prev=> !prev)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
       
      >
        <path
          d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
        />
      </svg>

      {menuOpen && (
        <div className="mobile-dropdown">
          {accessToken ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <Link to={"/login"}>Login</Link>
          )}

          <Link to="/orders">Orders</Link>
          <Link to="/checkout">Cart ({cartCount})</Link>
        </div>
      )}

     

    </div>
    </div>
  );
}