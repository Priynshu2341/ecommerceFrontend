import "../../styles/checkout/checkoutheader.css"
import { Checkoutheader } from "./checkoutheader";
import { CheckoutItems } from "./CheckoutItems";
import { CheckoutPayment } from "./CheckoutPayment";

export function CheckoutPage( {cart}){

return(
   <>
   <Checkoutheader cart={cart} />
   <CheckoutPayment cart = {cart} />
   <CheckoutItems  cart={cart} />
   </>
   
);
}