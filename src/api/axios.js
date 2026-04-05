import axios from "axios"

const backendApi = axios.create({
    baseURL: "https://ecommerce-backend-qmbp.onrender.com/api/v1"
})


export default backendApi;