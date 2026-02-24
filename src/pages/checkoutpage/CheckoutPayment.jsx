import "../../styles/checkout/checkoutPayment.css";
import { useAuth } from "../../auth/AuthContext";

export function CheckoutPayment({ cart }) {

  const { token } = useAuth();


  if (!cart) {
    return <p>Loading cart...</p>;
  }

  const cartCount = token ? cart.cartQuantity : 0;

  
  const itemsTotal = cart.totalPriceCents / 100;

  const shipping = cartCount > 0 ? 0 : 0;

  const tax = itemsTotal * 0;

  const orderTotal = itemsTotal + shipping + tax;

  return (
    <div className="checkout-box">

      <h3 className="review-title">Review your order</h3>

      <div className="payment-box">

        <h4 className="payment-title">Payment Summary</h4>

        <Row
          label={`Items (${cartCount}):`}
          value={itemsTotal}
        />

        <Row
          label="Shipping & handling:"
          value={shipping}
        />

        <Row
          label="Total before tax:"
          value={itemsTotal}
        />

        <Row
          label="Estimated tax (0%):"
          value={tax}
        />

        <hr />

        <div className="row total">
          <span>Order total:</span>
          <span>${orderTotal.toFixed(2)}</span>
        </div>

        <button
          className="order-btn"
          disabled={cartCount === 0}
        >
          Place your order
        </button>

      </div>

      {cartCount === 0 && (
        <>
          <p className="empty-text">Your cart is empty.</p>
          <button className="view-btn">View products</button>
        </>
      )}

    </div>
  );
}


function Row({ label, value }) {
  return (
    <div className="row">
      <span>{label}</span>
      <span>${value.toFixed(2)}</span>
    </div>
  );
}