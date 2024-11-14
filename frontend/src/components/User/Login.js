import React, { useState } from 'react';
import './styles/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaLock, FaEnvelope } from 'react-icons/fa';
import axios from 'axios';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [formErrors, setFormErrors] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate(); // Initialize useNavigate

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        let errors = {};

        // Validation checks
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
        }

        if (!formData.password.trim()) {
            errors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            errors.password = 'Password must be at least 6 characters long';
        }

        if (Object.keys(errors).length === 0) {
            try {
                const response = await axios.post('http://localhost:5000/api/auth/login', formData);
                alert(response.data.message); // Show success message

                // Assuming the backend returns the user's role or data
                localStorage.setItem('role', response.data.role); // Set user role in localStorage

                // Clear form data and errors
                setFormData({
                    email: '',
                    password: '',
                });
                setFormErrors({
                    email: '',
                    password: '',
                });

                // Redirect to Main Page after successful login
                navigate('/main');
            } catch (error) {
                console.error('Login error:', error);
                alert(error.response?.data.message || 'Login failed');
            }
        } else {
            setFormErrors(errors); // Set form validation errors
        }
    };

    return (
        <div className="loginbody">
            <div className="logincontainer">
                <h2>LOGIN</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email:</label>
                        <div className="input-container">
                            <FaEnvelope className="icon" />
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        {formErrors.email && <span>{formErrors.email}</span>}
                    </div>
                    <div>
                        <label>Password:</label>
                        <div className="input-container">
                            <FaLock className="icon" />
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                        </div>
                        {formErrors.password && <span>{formErrors.password}</span>}
                    </div>
                    <p>Don't have an Account? <Link to='/register'>...Sign Up</Link></p>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
