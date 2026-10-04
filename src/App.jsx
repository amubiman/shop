import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home'; 
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <Header /> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Home />} /> 
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
