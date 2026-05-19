import axios from "axios";

const backendApi = axios.create({
  baseURL: "https://venomchat.duckdns.org/shop/api/v1/",
});

export const refreshApi = axios.create({
  baseURL: backendApi.defaults.baseURL,
});

export default backendApi;
