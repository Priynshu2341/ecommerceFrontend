import { useState } from 'react'

import './App.css'
import { LoginPage } from './pages/LoginPage/LoginPage' 
import HomePage from './pages/homepage/HomePage'
import { Route, Routes } from 'react-router-dom'


function App() {
  

  return (
    <Routes>
      <Route path='/' element= {<HomePage />} />
      <Route path='/login' element= {<LoginPage />} />
      
   
    </Routes>
  )
}

export default App
