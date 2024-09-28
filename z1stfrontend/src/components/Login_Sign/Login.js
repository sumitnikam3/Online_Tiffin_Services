import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/login', { email, password });
            console.log(response.data);

        } catch (error) {
            console.error('Login error:', error.response.data.message);
            setError(error.response.data.message);
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100" style={{ backgroundImage: `url('')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'transparent' }}>
            <div className="card p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
                <h1 className="mb-4 text-center">Online Tiffin</h1>
                <h2 className="mb-4 text-center">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                    {error && <p className="text-danger mt-2">{error}</p>}
                </form>
                <p className="text-center mt-3">Don't have an account?</p>
                <p className="text-center mt-3"><a href="/signup">Sign Up</a></p>
            </div>
        </div>
    );
};
