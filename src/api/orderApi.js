import backendApi from "./axios";

export const checkout = async () => {
  const response = await backendApi.post("/orders/checkout");
  return response.data; 
}