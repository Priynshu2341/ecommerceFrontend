import { useNavigate } from "react-router-dom";
import "../../styles/checkout/checkoutheader.css";

import { Checkoutheader } from "./checkoutheader";
import { CheckoutItems } from "./CheckoutItems";
import { CheckoutPayment } from "./CheckoutPayment";
import { useEffect } from "react";

export function CheckoutPage({ cart, refreshCart }) {
   const navigate = useNavigate();
   const token = localStorage.getItem("token");

   useEffect(()=> {
    if(!token){
      navigate("/login");
    }
   },[token, navigate])

   if(!token){
    return null;
   }


  return (

    <>
      <Checkoutheader cart={cart} />

      <CheckoutPayment
        cart={cart}
        refreshCart={refreshCart}
      />

      <CheckoutItems cart={cart} refreshCart={refreshCart}/>
    </>
  );
}