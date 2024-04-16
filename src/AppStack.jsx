import logo from './logo.svg';
import './App.css';
import LoginUI from './ui/LoginUI';
import React, { Suspense, useState } from 'react';
import DashboardUI from './ui/DashboardUI';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from './Loader';
const ThemeContext = React.createContext('light');


const AppStack = () => {
  
return (
    <ThemeContext.Provider value="dark">
    <BrowserRouter>
        <Routes>
        {/* <Suspense fallback={<Loader />}> */}
            <Route  path="/" element={<LoginUI />} />
            <Route  path="/dashboard" element={<DashboardUI />} />
            <Route  path="/account/SignUp" element={<DashboardUI />} />
            {/* <Route path="*" element={<NoPage />} /> path to * will act as a catch-all for any undefined URLs. This is great for a 404 error page. */}
            {/* </Suspense> */}
        </Routes>
    </BrowserRouter>
    </ThemeContext.Provider>
  );
};

export default AppStack;
