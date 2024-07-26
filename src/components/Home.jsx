// src/components/Home.jsx
import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decoded = jwtDecode(token);
            setUser(decoded);
        } else {
            navigate('/login');
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <div>
            <h2>Home</h2>
            {user && (
                <div>
                    <p>Welcome, {user.firstName} {user.lastName}</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            )}
        </div>
    );
};

export default Home;
