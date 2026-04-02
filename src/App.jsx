import { useState,useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from './pages/authpages/loginpage/LoginPage';
import { RegisterPage } from './pages/authpages/registerpage/RegisterPage';
import HomePage from './pages/homepage/HomePage';
import { getProducts } from './api/productApi';
import { useAuth } from './auth/AuthContext';
import { fetchCart } from './store/cartThunks';
import { CheckoutPage } from './pages/checkoutpage/CheckoutPage';
import { OrderPage } from './pages/orderpage/OrderPage';
import { SearchPage } from './pages/searchpage/SearchPage';
import { productsThunk } from './store/productThunk';




function App() {
 
    const {token} = useAuth();
    const dispatch = useDispatch();
  
    const pageNumber = useSelector((state) => state.products.pageNumber);
    


  useEffect( () => {    

    dispatch(productsThunk({page : pageNumber,size : 14}));

     if(token){
     dispatch(fetchCart());
     }

  }, [dispatch,pageNumber]);

 
  return (
    <Routes>
         <Route path='/' element= {<HomePage />} />
         <Route path='/login' element= {<LoginPage />} />
         <Route path='/register' element={<RegisterPage />} />
         <Route path='/checkout' element={<CheckoutPage />} />
         <Route path='/orders' element= {<OrderPage />} />
         <Route path='/search' element= {<SearchPage />} />
    </Routes>
  );

}

export default App
