import backendApi from "./axios";

export const loginApi = async ({ email, password}) => {
     console.log("Sending login payload:", { email, password });
   const response = await backendApi.post("/auth/login",{
      "email": email,
      "password":password,
   }
      
   );
   return response.data;
   
}