import { useNavigate } from "react-router-dom";
import "../../styles/checkout/checkout-header.css";

import { useEffect } from "react";

import { CheckoutPayment } from "./CheckoutPayment";
import { CheckoutItems } from "./CheckoutItems";
import { CheckoutHeader } from  "./CheckoutHeader"
import { useAuth } from "../../auth/AuthContext";

export function CheckoutPage() {
  
   const navigate = useNavigate();
   const { accessToken } = useAuth();

   useEffect( () => {
    if(!accessToken){
      navigate("/login");
    }
   },[accessToken, navigate])

  return (

    <>
      <CheckoutHeader />

      <CheckoutPayment />

      <CheckoutItems />
    </>
  );
}