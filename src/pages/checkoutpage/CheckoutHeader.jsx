import "../../styles/checkout/checkout-header.css"
import { useAuth } from "../../auth/AuthContext";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export function CheckoutHeader(){

    const { accessToken } = useAuth();
    const cart = useSelector((state) => state.cart);
    const cartCount = !accessToken ? 0 : cart.totalQuantity

    return(
    <div className="blank-header">
        <div className="checkout-header">

        <div className="left-section">
            <Link to="/" className="header-link">
            <img className="logo" src="/images/logo.png" alt="Logo" />
            <img className="mobile-logo" src="/images/mobile-logo-white.png" alt="Mobile Logo" />
            </Link>
        </div>

        <div className="middle-side-header">
            <p className="checkout-text">Checkout  </p>
            <p className="checkout-items">{`(${cartCount} items)`}</p>  
        </div>

        <div className="right-side-header">
            <img className="checkout-logo"
            src="images/icons/checkout-lock-icon.png"></img>
        </div>
      </div>
    </div>     
    );

}