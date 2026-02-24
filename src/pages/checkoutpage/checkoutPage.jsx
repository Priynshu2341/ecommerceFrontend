import "../../styles/checkout/checkoutheader.css"
import { Link } from "react-router-dom";
import { Checkoutheader } from "./checkoutheader";
import { CheckoutContent } from "./CheckoutContent";

export function CheckoutPage( {cart}){

return(
   <>
   <Checkoutheader cart={cart} />
   <CheckoutContent />
   </>
   
);
}