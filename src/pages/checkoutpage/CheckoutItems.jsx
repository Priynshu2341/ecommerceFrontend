import "../../styles/checkout/checkout-items.css";
import { useAuth } from "../../auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { deleteCartItem, updateCartItem } from "../../store/cartThunks"
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";


export function CheckoutItems() {
    
  const [showUpdateBtn,setUpdateBtn] = useState(true);
  const [editingProductId, setEditingProductId] = useState(null);
  const [quantityValue,setQuantityValue] = useState(0);

  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch();

  const {token} = useAuth();
  const navigate = useNavigate();

  async function handleDeleteBtn(productId) {
    if(!token){
      navigate("/login")
      return;
    }
      
    dispatch(deleteCartItem(productId));

  }
  
  async function handleUpdateBtn(productID,quantity) {
       if(!token){
        navigate("/login")
        return;
       }
       console.log(productID);
       dispatch(updateCartItem({productID,quantity}));
      setEditingProductId(null);
  }


  if (!cart || !cart.items) {
    return <p>Loading items...</p>;
  }

  return (
    <div className="items-grid">


      {cart.items.map((item)=>(
        <div className="item-card" key={item.productId}>

        <p className="delivery-date">
            Delivery date: Thursday, March 5
        </p>

        <div className="item-main" >
        
         <img src= {`/${item.image}`}
            alt={item.name} 
            className="item-image"
        ></img> 
        
          <div className="item-info">

            <p className="item-name">{item.name}</p>

            <p className="item-price">
              ${(item.priceCents / 100).toFixed(2)}
            </p>

            <p className="item-qty">
              Quantity: {item.quantity}
            </p>
               
             {editingProductId === item.productId ? (
              <>
                <input type="number" className="input-quantity" 
                onChange={(e) => setQuantityValue(Number(e.target.value))}
                defaultValue={item.quantity} />
                <button onClick={() => handleUpdateBtn(item.productId,quantityValue)}>Save</button>
              </>
              ) : (
                <button
                className="update-btn"
                onClick={() => {
                  setEditingProductId(item.productId)
                  setQuantityValue(item.quantity)
                }
                } 
              
                >
                Update
                </button>
                )}
             
            <button onClick={()=> handleDeleteBtn(item.productId)}
             className="delete-btn">
                Delete
            </button>

        </div>
        </div>
       


      
        </div>
      ))}


    </div>
  );
}