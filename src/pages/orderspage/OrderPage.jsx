import { HomePageHeader } from "../homepage/HomePageHeader";
import { OrderContent } from "./OrderContent";
export function OrderPage({cart , refreshCart}){
    return(
       <>
       <HomePageHeader cart={cart} />
       <OrderContent cart= {cart} refreshCart={refreshCart} />
       </> 
      
      

    );
}