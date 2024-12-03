import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        // Here you would send the registration data to your server
        // console.log('Registered with:',name, email, password);
        const user = { username, email, password, from:'local' };
        const permitions={username, role: "User", status: "Active",permissions: ["Read"] }
        localStorage.setItem('register', JSON.stringify(user));
        localStorage.setItem('action',JSON.stringify(permitions))
        setUserName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        alert('Registration successful!');
        navigate('/login')
    };

    return (
        <div className="auth-container">
            <div className="registerbox">
                <h2>Register</h2>
                <form onSubmit={handleRegister} className="auth-form">
                    <div className="form-group">
                        <label>UserName:</label>
                        <input
                            type="text"
                            placeholder="Enter your Name"
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="off"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            autoComplete="off"
                            required
                        />
                    </div>
                    <button type="submit" className="auth-button">Register</button>
                    <p>Already have an account? <a href="/login">Login</a></p>
                </form>
            </div>
        </div>
    );
};

export default Register;
