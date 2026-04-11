import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { CheckoutPayment } from "./CheckoutPayment";
import { CheckoutItems } from "./CheckoutItems";
import { HomePageHeader } from "../homepage/HomePageHeader"  
import { useAuth } from "../../auth/AuthContext";
import { useSelector } from "react-redux";

export function CheckoutPage() {
  
   const navigate = useNavigate();
   const { accessToken } = useAuth();
   const cart = useSelector((state) => state.cart);

   useEffect( () => {
    if(!accessToken){
      navigate("/login");
    }
   },[accessToken, navigate])

  return (

    <>
      <HomePageHeader />
       
      <div >
        {
          cart.items.length === 0 ? (
            <div className="empty-cart-div">
              <p className="cart-empty-text">Your cart is Empty</p>
              <button className="shop-now-btn"
               onClick={() => navigate("/")}
              >Shop Now</button>
            </div>
           
          ) : (
            <div className="root-container"> 
            <div className="cart-text-div">
              <h1 className="cart-text">Your Cart</h1>
              <CheckoutItems />

            </div>
            
              <CheckoutPayment />
            </div>
          )
        }
      </div>
        
       
      
    </>
  );
}