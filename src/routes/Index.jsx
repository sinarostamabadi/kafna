import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Private from "./private/Index";
import Public from "./public/Index"
import HomePage from '../Pages/HomePage/HomePage';
import AboutPage from '../Pages/AboutPage/AboutPage';
import LoginPage from '../Pages/LoginPage/LoginPage';
import SupportPage from '../Pages/SupportPage/SupportPage';
import SignUpPage from '../Pages/SignUpPage/SignUpPage';

export default function Index() {
  return (
    <Routes>
      {/* private routes */}
        <Route  element={<Private />}>
            <Route path='/' element={<HomePage />} />
        </Route>


        {/* public routes */}
        <Route element={<Public />}>
          <Route path='/about' element={<AboutPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/support' element={<SupportPage />} />
          <Route path='/sign-up' element={<SignUpPage />} />
        </Route>
    </Routes>
  )
}
