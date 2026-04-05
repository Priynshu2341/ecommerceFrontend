import { useEffect } from "react";
import { useAuth } from "./AuthContext";
import {fetchCart} from "../store/cartThunks"
import { useDispatch } from "react-redux";



export function AppIntilizer(){
 
    const {isAuthReady,accessToken} = useAuth();
    const dispatch = useDispatch();

    useEffect(() => {
        if(isAuthReady && accessToken){
            dispatch(fetchCart());
        }
    },[dispatch,isAuthReady,accessToken])

    return null;
}