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
         <div className="store-logo-div">
            <img className="store-logo"
            src="/images/store-flow.png" alt="LOGO" />
         </div>
           
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