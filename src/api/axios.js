import axios from "axios"

const backendApi = axios.create({
    baseURL: "http://localhost:8080/api/v1"
})

export const refreshApi  = axios.create({
    baseURL: backendApi.defaults.baseURL,
});

export default backendApi;