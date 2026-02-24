import { useState, useEffect} from 'react'
import { getProducts,getCart } from './api/productApi'
import './App.css'
import { LoginPage } from './pages/LoginPage/LoginPage' 
import { CheckoutPage } from './pages/checkoutpage/checkoutPage'
import HomePage from './pages/homepage/HomePage'
import { Route, Routes } from 'react-router-dom'



function App() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        getProducts()
        .then((data) =>{          
            setProducts(data);
        })
        .catch(() => setError("Failed to Load Products"))
        .finally(()=> setLoading(false));

        const token = localStorage.getItem("token");

        if(token){
            getCart()
            .then((data)=>{
                setCart(data);
            })
            
        }
    },[]) 
  

  return (
    <Routes>
      <Route path='/' element= {<HomePage products = {products} cart = { cart } loading ={loading} error = {error} />} />
      <Route path='/login' element= {<LoginPage />} />
      <Route path='/checkout' element= { <CheckoutPage cart = { cart } />  } />
      
   
    </Routes>
  )
}

export default App
