import backendApi from "./axios";

export const getProducts = async () =>{
    const response = await backendApi.get("/product/all");
    return response.data;
}


export const getCart = async () => {
    const response = await backendApi.get("/cart")
    return response.data
}

export const addToCart = async ({ productId, quantity }) =>{
    console.log(`adding to cart with ${productId} and ${quantity}`);
    const response  = await backendApi.post("/cart/items",
          { "quantity": quantity } ,
          {   params: { productId}}

);
        console.log("added to cart");
        return response.data;
}

export const ProductSearch = async (name) => {
    console.log(name);
    const response = await backendApi.get(`/search?productName=${name}`)
    return response.data;
    
} 