import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import "../../styles/HeaderStyle.css";
import "../../styles/HomeStyle.css";

export const SignupForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState(''); // State for storing email input
    const [password, setPassword] = useState(''); // State for storing password input
    const [error, setError] = useState(''); // State for storing error message
    const [message, setMessage] = useState(''); // State for storing success message
    const navigate = useNavigate(); // Hook for programmatic navigation

    const handleSignup = async () => {
        try {
            console.log('Attempting to sign up with email:', email);
            const response = await axios.post('http://localhost:7400/api/user/register', { name, email, password }); // Include name in the signup request
            console.log('Signup response:', response.data);

            if (response.data.success) {
                localStorage.setItem('token', response.data.token); // Store token in local storage
                setMessage('Signup successful!'); // Update success message
                console.log('Signup successful, navigating to dashboard');
                navigate('/'); // Redirect to dashboard or home page
                alert('Sign Up SuceesFull');

            } else {
                setError(response.data.message); // Set error message from response
                setMessage(''); // Clear any previous success message
                console.log('Signup failed:', response.data.message);
                alert('Signup failed');

            }
        } catch (error) {
            if (error.response && error.response.data) {
                console.error('Signup error:', error.response.data.message);
                setError(error.response.data.message); // Set error message from API response
                setMessage(''); // Clear any previous success message
            } else {
                console.error('Signup error:', error.message);
                setError('An error occurred during signup'); // Set generic error message
                setMessage(''); // Clear any previous success message
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        handleSignup(); // Call handleSignup function to perform signup
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100" style={{ backgroundImage: `url('https://img.freepik.com/free-photo/high-angle-asian-food-ingredients-with-copy-space_23-2148377383.jpg?t=st=1716208768~exp=1716212368~hmac=071737cec6aab754d46cedc7d92d2ce6b2962e470d28fd7efce2fd9757dd0742&w=1380')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'transparent' }}>
            <div className="card p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
                <h1 className="mb-4 text-center">Online Tiffin</h1>
                <h2 className="mb-4 text-center">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <div className="mb-3"></div>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Update email state on input change
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} // Update password state on input change
                            required
                        />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">Sign Up</button>
                    </div>
                    {error && <p className="text-danger mt-2">{error}</p>} {/* Display error message if present */}
                    {message && <p className="text-success mt-2">{message}</p>} {/* Display success message if present */}
                </form>
                <p className="text-center mt-3">Already have an account?</p>
                <p className="text-center mt-3 text-primary font-weight-bold text-decoration-underline"><Link to="/login">Login</Link></p>
            </div>
        </div>
    );
};
