import './App.css'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from './pages/authpages/loginpage/LoginPage';
import { RegisterPage } from './pages/authpages/registerpage/RegisterPage';
import HomePage from './pages/homepage/HomePage';
import { CheckoutPage } from './pages/checkoutpage/CheckoutPage';
import { OrderPage } from './pages/orderpage/OrderPage';
import { SearchPage } from './pages/searchpage/SearchPage';



function App() {


  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/checkout' element={<CheckoutPage />} />
      <Route path='/orders' element={<OrderPage />} />
      <Route path='/search' element={<SearchPage />} />
    </Routes>
  );
}

export default App
