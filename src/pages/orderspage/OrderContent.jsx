import { useNavigate } from "react-router-dom";
import { getOrders } from "../../api/orderApi";
import { useAuth } from "../../auth/AuthContext";
import { useEffect, useState } from "react";
import '../../styles/orders/OrderContent.css'

export function OrderContent({cart , refreshCart}){
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
    <div className="order-container">
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

        <div className="order-detail-div">
        {order.items.map((item) => (
       <div key={`${item.productID}`} className="order-item-row">
      <img
        className="order-image"
        src={`/${item.image}`}
        alt={item.name}
      />

      <div className="order-details">
        <p className="order-name-text">{item.name}</p>
        <p className="order-price-text">
          Amount: ${(item.priceCents / 100).toFixed(2)}
        </p>
        <p className="order-quantity-text">
          Quantity: {item.quantity}
        </p>

       <button 
        className="add-to-cart-order-btn">
        <img className="add-to-cart-logo" src="/images/icons/cart-icon.png" /> 
        Add to Cart
      </button>
      </div>

         <div className="cancel-btn-div">
          <button 
          className="cancel-btn">Track Pakage</button>
        </div> 
      
          </div>
        ))}
    </div>

       </div> 
    
     );
          
    })
      }

    </div>
  </>  
      
    );
}