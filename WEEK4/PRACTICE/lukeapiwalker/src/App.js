import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Characterdisplay from './Components/Characterdisplay';
import Planetdispay from './Components/Planetdisplay';



function App() {


  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/people/:id' element={<Characterdisplay />} />
        <Route path='/planets/:id' element={<Planetdispay />} />
      </Routes>
    </div>
  );
}

export default App;
