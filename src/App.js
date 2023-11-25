//import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Models from './pages/models';
import Manufacturers from './pages/manufacturers';
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
function App() {
  //const url = 'https://65623293dcd355c08324a83c.mockapi.io/models';


  return (


    <Routes>
      <Route path='/' element={<Models />} />
      <Route path='/man' element={<Manufacturers />} />
    </Routes>

  );
}

export default App;
