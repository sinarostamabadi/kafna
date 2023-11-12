import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Private from "./private/Index";
import Public from "./public/Index"
import HomePage from '../Pages/HomePage/HomePage';
import AboutPage from '../Pages/AboutPage/AboutPage';
import LoginPage from '../Pages/LoginPage/LoginPage';
import SupportPage from '../Pages/SupportPage/SupportPage';
import SignUpPage from '../Pages/SignUpPage/SignUpPage';
import WelcomePage from '../Pages/WelcomePage/WelcomePage';
import ChooseSkillPage from '../Pages/ChooseSkillPage/ChooseSkillPage';
import QuizPage from '../Pages/QuizPage/QuizPage';
import QuizResult from '../Pages/QuizResult/QuizResult';
import ShopPage from '../Pages/ShopPage/ShopPage';
import RolePage from '../Pages/RolePage/RolePage';
import SoonPage from '../Pages/SoonPage/SoonPage';
import FindWork from '../Pages/FindWorkPage/FindWorkPage';
import FreelancerExamPage from '../Pages/FreelancerExamPage/FreelancerExamPage';

export default function Index() {
  return (
    <Routes>
      {/* private routes */}
        <Route  element={<Private />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/welcome' element={<WelcomePage />} />
            <Route path='/choose-skill' element={<ChooseSkillPage />} />
            <Route path='/quiz/:id' element={<QuizPage />} />
            <Route path='/quiz-result' element={<QuizResult />} />
            <Route path='/shop' element={<ShopPage />} />
            <Route path='/role' element={<RolePage />} />
            <Route path='/find-work' element={<FindWork />} />
            <Route path='/freelance-exam' element={<FreelancerExamPage />} />
        </Route>


        {/* public routes */}
        <Route element={<Public />}>
          <Route path='/about' element={<AboutPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/support' element={<SupportPage />} />
          <Route path='/sign-up' element={<SignUpPage />} />
          <Route path='/soon' element={<SoonPage />} />
        </Route>
    </Routes>
  )
}
