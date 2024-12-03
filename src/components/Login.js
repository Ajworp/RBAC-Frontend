import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../cssfiles/RLogin.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [local, setLocal] = useState();
  const navigate = useNavigate();



  useEffect(() => {
    const token = localStorage.getItem('user');
    if (!token) {
      navigate('/login');
    }
    const R = localStorage.getItem('register');
    if (R) {
      setLocal(JSON.parse(R));
    }
  }, [navigate]);


  // setLocal(R);


  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(local);// console.log({ email, password });
    try {
      const response = await fetch("/mock-data/users.json");
      const users = await response.json();
      const user = (users.find((u) => u.email === email && u.password === password) || (local.email === email && local.password === password));
      // console.log(user.role);
      if (user) {
        if (user.id) {
          localStorage.setItem('user', JSON.stringify(user));
          localStorage.setItem('role', user.role);
          navigate('/usermanagement');
          window.location.reload();
        } else {
          localStorage.setItem('user', JSON.stringify(local));
          localStorage.setItem('role', user.role);
          navigate('/usermanagement');
          window.location.reload();
        }

      }


    } catch (error) {
      console.log(error);
      //   const user = (R.email === email && R.password === password);
      // if (user) {
      //   localStorage.removeItem('user');
      //   localStorage.setItem('user', JSON.stringify(user));
      //   navigate('/usermanagement');
      //   window.location.reload();
      // }
    }



    // Here you would normally authenticate the user, for now we just log them in
    // console.log('Logged in with:', email, password);
    // try {
    // const res = await axios.post('http://localhost:8080/api/auth/login', { email, password });
    // console.log(res.data.token);
    // localStorage.setItem('token', res.data.token);
    // setToken(res.data.token);
    // navigate('/dashboard');
    // } catch (error) {
    //   console.log(error);

    // }
    // Redirect to the dashboard (or home page)

  };

  return (
    <div className="auth-container">
      <div className="loginbox">
        <h2>Login</h2>
        <form onSubmit={handleLogin} className="auth-form">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
              required
            />
          </div>
          <button type="submit" className="auth-button">Login</button>
          <p>Don't have an account? <a href="/register">Register</a></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
