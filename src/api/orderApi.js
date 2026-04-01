import backendApi from "./axios";

export const checkout = async () => {
  const response = await backendApi.post("/orders/checkout");
  return response.data; 
}


export const getOrders = async () => {
  const response = await backendApi.get("/orders/customer");
  return response.data;
}


export const removeCartItem = async (productID) => {
  const response = await backendApi.delete(`cart/items/${productID}`);
  console.log("item deleted");
  return response.data;
}

export const updateCart = async ({productID,quantity}) => {
  console.log(`${productID},and  ${quantity}`)
  const response = await backendApi.put(`/cart/items/${productID}?quantity=${quantity}`)
  console.log("updating cart");
  return response.data;
}