import axios from "axios"

const backendApi = axios.create({
    baseURL: "https://ecommerce-backend-x2cb.onrender.com/api/v1"
})

backendApi.interceptors.request.use((config) =>{
    const token = localStorage.getItem("token");
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    };
    return config;
} )

export default backendApi;