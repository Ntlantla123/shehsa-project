import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import Login from './components/Login';
import { NavMenu } from './components/NavMenu';
import { Recipes } from './components/Recipes';
import Register from './components/Register';
import Forgot from './components/forgotpassword';
import { ToastContainer } from 'react-toastify';


function App() {
  
  return (
    <div className="App">
      <ToastContainer theme='colored'></ToastContainer>
     <BrowserRouter>
     <Routes>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Register' element={<Register/>}></Route>
      <Route path='/NavMenu' element={<NavMenu/>}></Route>
      <Route path='/Recipes' element={<Recipes/>}></Route>
      <Route path='/forgot' element={<Forgot/>}></Route>
     </Routes>

     </BrowserRouter>

    </div>
  );
}

export default App;
