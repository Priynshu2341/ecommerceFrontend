import "../../styles/checkout/checkoutheader.css";

import { Checkoutheader } from "./checkoutheader";
import { CheckoutItems } from "./CheckoutItems";
import { CheckoutPayment } from "./CheckoutPayment";

export function CheckoutPage({ cart, refreshCart }) {

  return (
    <>
      <Checkoutheader cart={cart} />

      <CheckoutPayment
        cart={cart}
        refreshCart={refreshCart}
      />

      <CheckoutItems cart={cart} />
    </>
  );
}