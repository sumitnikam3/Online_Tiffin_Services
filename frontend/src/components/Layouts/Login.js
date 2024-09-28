
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import "../../styles/HeaderStyle.css";
import "../../styles/HomeStyle.css";

export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState(''); // New state for success/failure message
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            console.log('Attempting to log in with email:', email);
            const response = await axios.post('http://localhost:7400/api/user/login', { email, password });
            console.log('Login response:', response.data);

            if (response.data.token) {
                localStorage.setItem('token', response.data.token); // Store token
                setMessage('Login successful!'); // Update success message
                console.log('Login successful, navigating to dashboard');
                navigate('/dashboard'); // Redirect to a dashboard or home page
            } else {
                setError('Login failed: No token received');
                setMessage(''); // Clear any previous success message
                console.log('Login failed: No token received');
            }
        } catch (error) {
            if (error.response && error.response.data) {
                console.error('Login error:', error.response.data.message);
                setError(error.response.data.message);
                setMessage(''); // Clear any previous success message
            } else {
                console.error('Login error:', error.message);
                setError('Enter Valid Details ');
                setMessage(''); // Clear any previous success message
            }
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin();
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100" style={{ backgroundImage: `url('https://img.freepik.com/free-photo/high-angle-asian-food-ingredients-with-copy-space_23-2148377383.jpg?t=st=1716208768~exp=1716212368~hmac=071737cec6aab754d46cedc7d92d2ce6b2962e470d28fd7efce2fd9757dd0742&w=1380')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'transparent' }}>
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
                    {message && <p className="text-success mt-2">{message}</p>} {/* Display success message */}
                </form>
                <p className="text-center mt-3">Don't have an account?</p>
                <p className="text-center mt-3 text-primary font-weight-bold text-decoration-underline"><Link to="/signup">Sign Up</Link></p>
            </div>
        </div>
    );
}; 