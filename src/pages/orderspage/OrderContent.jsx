import { useNavigate } from "react-router-dom";
import { getOrders } from "../../api/orderApi";
import { useAuth } from "../../auth/AuthContext";
import { useEffect, useState } from "react";
import '../../styles/orders/OrderContent.css'

export function OrderContent(){
    const [orders,setOrders] = useState([]);

    const { token } = useAuth();
    const navigate = useNavigate();
  
    useEffect( () => {
        async function getOrder() {
        if(!token){
            navigate("/")
            return
        }
        try{
           const orders = await getOrders();
           console.log(orders);
           setOrders(orders);
           console.log(orders);

        }
        catch(e){
            console.log(e);
        }
    }
    getOrder();
    },[token,navigate])
     

    return(
      <>
      <p className="order-title">Your Orders</p>
      {
        orders.map(( order ) => {
            
            return(
                
         <div key={order.orderId}>
         
          <div className="info-div" >

          <div>
            <p className="order-placed-text">Order Placed:</p>
            <p className="date-text"> {
            new Date(order.createdAt).toLocaleDateString()
            }  
            </p>
            
          </div>  

          
          <div>
            <p className="total-text">Total:</p>
            <p className="total-amount"> {
              `$${(order.totalPriceCents / 100 ).toFixed(2)} `
            }  
            </p>
            
          </div>  

           <div>
            <p className="orderId-text">Order ID:</p>
            <p className="orderId-main"> {
              order.orderId
            }  
            </p>
            
          </div>  
            
          
          
           
       </div> 
         </div> 
            );
          
       

        })
      }

       
      </>  
      
    );
}