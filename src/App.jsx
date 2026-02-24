import { useState } from 'react'

import './App.css'
import { LoginPage } from './pages/LoginPage/LoginPage' 
import { CheckoutPage } from './pages/checkoutpage/checkoutPage'
import HomePage from './pages/homepage/HomePage'
import { Route, Routes } from 'react-router-dom'


function App() {
  

  return (
    <Routes>
      <Route path='/' element= {<HomePage />} />
      <Route path='/login' element= {<LoginPage />} />
      <Route path='/checkout' element= { <CheckoutPage />  } />
      
   
    </Routes>
  )
}

export default App
