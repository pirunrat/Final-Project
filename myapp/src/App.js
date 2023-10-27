import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import Basket from './components/Basket';
import Contact from './components/Contact';
import Product from './components/Product';
import '../src/css/Footer.css'

function App() {

    const [authenticated, setAuthenticated] = useState(false);
    
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setAuthenticated(true);
            console.log("Successful");
        }
    }, []);

    const handleSetAuthenticated = (value) => {
      setAuthenticated(value);
  }

    return (
      <div className='App'>
          {authenticated ? (
              <Router>
                <Routes>
                  <Route path="/" element={ <HomePage setAuthenticated={handleSetAuthenticated}/>} />
                  <Route path="/Basket" element={ <Basket setAuthenticated={handleSetAuthenticated}/>} />
                  <Route path="/Contact" element={ <Contact setAuthenticated={handleSetAuthenticated}/>} />
                  <Route path="/Product" element={ <Product setAuthenticated={handleSetAuthenticated}/>} />
                </Routes>
              </Router>
          ) : (
            <Login setAuthenticated={handleSetAuthenticated} />
          )}
           <Footer/> 
      </div>
    );
}

export default App;
