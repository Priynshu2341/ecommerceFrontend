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

export const registerApi = async ({email,password,firstname,lastname}) =>{
   console.log("Sending register payload:", { email, password,firstname,lastname });
   const response = await backendApi.post("/auth/register",{
      "email" : email,
      "password": password,
      "firstname" : firstname,
      "lastname": lastname
   });
   console.log("register sucedded:", { email, password });
   return response.data;
}