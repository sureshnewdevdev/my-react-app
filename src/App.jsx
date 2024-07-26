// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';

const App = () => {
    const token = localStorage.getItem('token');

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to={token ? "/home" : "/login"} />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    );
};

export default App;
