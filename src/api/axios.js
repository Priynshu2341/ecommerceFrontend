import axios from "axios"

const backendApi = axios.create({
    baseURL: "https://ecommerce-backend-qmbp.onrender.com/api/v1"
})

export const refreshApi  = axios.create({
    baseURL: backendApi.defaults.baseURL,
});

export default backendApi;