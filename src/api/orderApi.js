import backendApi from "./axios";

export const checkout = async () => {
  const response = await backendApi.post("/orders/checkout");
  return response.data; 
}


export const getOrders = async () => {
  const response = await backendApi.get("/orders/customer");
  return response.data;
}