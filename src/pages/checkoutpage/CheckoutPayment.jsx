import "../../styles/checkout/checkout-payment.css";
import { useAuth } from "../../auth/AuthContext";
import { checkoutThunk } from "../../store/cartThunks";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export function CheckoutPayment() {

  const { accessToken } = useAuth();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const cartCount = accessToken ? cart.cartQuantity : 0;
  
  async function handleCheckout() {

    if (!accessToken) {
      navigate("/login");
      return;
    }

    if(cartCount === 0){
      alert("cart is empty")
      return;
    }

    try { 
      await dispatch(checkoutThunk()).unwrap();
      alert("Order Sucessfull");
      navigate("/");

    } catch (err) {
      console.error("Checkout error:", err);
      alert("Checkout failed");
    }
  }

  if (!cart) return <p>Loading cart...</p>;

  

  const itemsTotal = cart.totalPriceCents / 100;

  const orderTotal = itemsTotal;

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
          value={0}
        />

        <Row
          label="Total before tax:"
          value={itemsTotal}
        />

        <Row
          label="Estimated tax (0%):"
          value={0}
        />

        <hr />

        <div className="row total">
          <span>Order total:</span>
          <span>${orderTotal.toFixed(2)}</span>
        </div>

        <button
          className="order-btn"
          disabled={cartCount === 0}
          onClick={handleCheckout}
        >
          Place your order
        </button>

      </div>

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