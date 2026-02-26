import "../../styles/checkout/checkoutItems.css";

export function CheckoutItems({ cart }) {

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

            <button className="update-btn">
                Update
            </button>
            

             <button className="delete-btn">
                Delete
            </button>

        </div>
        </div>
       


      
        </div>
      ))}


    </div>
  );
}