import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import './Login.css';
import HomePage from './HomePage';
import Login from './Login';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  return (
        <div>
           {authenticated ? (
             <HomePage setAuthenticated={setAuthenticated}/>
          ) : (
            <Login setAuthenticated={setAuthenticated} />
          )}
        </div>
         
  );
}
export default App;
