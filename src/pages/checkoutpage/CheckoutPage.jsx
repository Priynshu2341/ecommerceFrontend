import { useNavigate } from "react-router-dom";
import "../../styles/checkout/checkout-header.css";

import { useEffect } from "react";

import { CheckoutPayment } from "./CheckoutPayment";
import { CheckoutItems } from "./CheckoutItems";
import { CheckoutHeader } from  "./CheckoutHeader"

export function CheckoutPage() {
  
   const navigate = useNavigate();
   const token = localStorage.getItem("token");

   useEffect( () => {
    if(!token){
      navigate("/login");
    }
   },[token, navigate])

   if(!token){
    return null;
   }


  return (

    <>
      <CheckoutHeader />

      <CheckoutPayment />

      <CheckoutItems />
    </>
  );
}