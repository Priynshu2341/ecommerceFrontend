import backendApi from "./axios";

export const getProducts = async () =>{
    const response = await backendApi.get("/product/all");
    return response.data;
}