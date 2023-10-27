import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes,  Route} from 'react-router-dom';

function ProtectedRoute({ authenticated, fallbackPath = "/login", children }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (!authenticated) {
            setTimeout(() => {
                navigate(fallbackPath);
            }, 0);
        }
    }, [authenticated, navigate, fallbackPath]);

    return authenticated ? children : null;
}

export default ProtectedRoute;