import { useEffect } from "react";
import { useAuth } from "../../auth/AuthContext";
import { HomePageHeader } from "../homepage/HomePageHeader";
import { OrderContent } from "./OrderContent";
import { useNavigate } from "react-router-dom";


export function OrderPage(){
 
    const {accessToken} = useAuth();
    const navigate = useNavigate();

    useEffect(()=> {
        if(!accessToken){
            navigate("/login")
        }
    })

    return(
    <div className="container-div">
      <HomePageHeader  />
      <OrderContent   />   
   </div>
       
    );
}