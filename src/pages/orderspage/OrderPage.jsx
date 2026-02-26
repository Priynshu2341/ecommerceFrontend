import { HomePageHeader } from "../homepage/HomePageHeader";
import { OrderContent } from "./OrderContent";
export function OrderPage({cart}){
    return(
       <>
       <HomePageHeader cart={cart} />
       <OrderContent />
       </> 
      
      

    );
}