import { useEffect, useState } from "react";
import { useAuth } from "../../auth/AuthContext";
import "../../styles/shared/header.css";
import { Link } from "react-router-dom";
import backendApi from "../../api/axios";

export function HomePageHeader() {
  const [cart,setCart] = useState([]);
  const token = localStorage.getItem("token");
  console.log(token);


  const { logout } = useAuth();
  useEffect( async ()=>{
   const cart = await backendApi.get("/cart");
   setCart(cart.data);
   console.log(cart.data )
   
  },[])
  
    
  return (
    <div className="header">
      <div className="left-section">
        <Link to="/" className="header-link">
          <img
            className="logo"
            src="/images/logo-white.png"
            alt="Logo"
          />
          <img
            className="mobile-logo"
            src="/images/mobile-logo-white.png"
            alt="Mobile Logo"
          />
        </Link>
      </div>

      <div className="middle-section">
        <input
          className="search-bar"
          type="text"
          placeholder="Search"
        />

        <button className="search-button">
          <img
            className="search-icon"
            src="/images/icons/search-icon.png"
            alt="Search"
          />
        </button>
      </div>

      <div className="right-section">
        {token ? (
          <button className="logout-link header-link"
           onClick={ logout }>Logout</button>
        ) : (
          <Link className="login-link header-link" to="/login.html">
            <span className="login-text">Login</span>
          </Link>
        )}
            
        
        <Link
          className="orders-link header-link"
          to="/orders"
        >
          <span className="orders-text">Orders</span>
        </Link>

        <Link
          className="cart-link header-link"
          to="/checkout"
        >
          <img
            className="cart-icon"
            src="/images/icons/cart-icon.png"
            alt="Cart"
          />
          <div className="cart-quantity">3</div>
          <div className="cart-text">Cart</div>
        </Link>
      </div>
    </div>
  );
}
