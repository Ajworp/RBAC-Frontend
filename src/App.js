import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import UserManagement from './components/UserManagement';
import RoleManagement from './components/RoleManagement';
import Navbar from './components/Navbar';
// import Home from './components/Home';


function App() {


  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/usermanagement"
            element={<UserManagement 
              // users={users} setUsers={setUsers} 
              />}
          />
          <Route
            path="/rolemanagement"
            element={<RoleManagement 
              // roles={roles} setRoles={setRoles} permissions={permissions} 
              />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;