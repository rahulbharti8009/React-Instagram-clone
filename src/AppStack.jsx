import logo from './logo.svg';
import './App.css';
import LoginUI from './ui/LoginUI';
import { useState } from 'react';
import DashboardUI from './ui/DashboardUI';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const AppStack = () => {
  
return (
    <BrowserRouter>
        <Routes>
            <Route  path="/" element={<LoginUI />} />
            <Route  path="/DashboardUI" element={<DashboardUI />} />
            <Route  path="/account/SignUp" element={<DashboardUI />} />

            {/* <Route path="*" element={<NoPage />} /> path to * will act as a catch-all for any undefined URLs. This is great for a 404 error page. */}
        </Routes>
    </BrowserRouter>
  );
};

export default AppStack;
