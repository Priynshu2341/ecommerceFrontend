import backendApi from "./axios";

export const getProducts = async () =>{
    const response = await backendApi.get("/product/all");
    return response.data;
}


export const getCart = async () => {
    const response = await backendApi.get("/cart")
    return response.data
}