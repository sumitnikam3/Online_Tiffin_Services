
import './App.css';
import CustomNavbar from './components/Navbar.jsx';
import { Route, Routes } from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Home } from './components/Home.jsx';


function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path="/login" element={<Login/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}
export default App;

