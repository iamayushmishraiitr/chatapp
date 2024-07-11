// App.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Home from './pages/home';
import SidebarLayout from './components/Sidebar';
import './App.css';
import { useSelector } from 'react-redux';
import Front from "./pages/Front"
function App() {
 const token = useSelector((state)=>state?.token?.token) ;

  return (
    <div>
      <Routes>
        <Route path="/" element={token!= null? <SidebarLayout /> : <Navigate to="/signin" />} >
          <Route index element={<Front />} />
          <Route path="/:id" element={<Home />} />
        </Route>
        <Route path="/signin" element={token!=null ? <Navigate to="/" /> : <Signin />} />
        <Route path="/signup" element={token!=null? <Navigate to="/" /> : <Signup />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
