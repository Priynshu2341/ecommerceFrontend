import "../../styles/checkout/checkoutheader.css"
import { Checkoutheader } from "./checkoutheader";
import { CheckoutPayment } from "./CheckoutPayment";

export function CheckoutPage( {cart}){

return(
   <>
   <Checkoutheader cart={cart} />
   <CheckoutPayment cart = {cart} />
   </>
   
);
}