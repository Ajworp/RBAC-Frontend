import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../cssfiles/navbar.css'
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  // const [logo, setLogo] = useState('Logo');
  const [user, setUser] = useState({username: 'Logo'});
  const u = localStorage.getItem('user');



  useEffect(() => {
      if (u) {
  setUser(JSON.parse(u));    
  }
  }, [u]);

  const logoutbtn = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('register');
    localStorage.removeItem('action');
    localStorage.removeItem('createdA');
    localStorage.removeItem('createdU');
    localStorage.removeItem('createdA1');
    localStorage.removeItem('createdU1');
    localStorage.removeItem('role');
    window.location.reload();
  }
  // setLogo(user.username);
  // console.log(user);
  // console.log(user.username);
  
  
  

  return (
    <div className='navbar'>
      <div className="navin">
        <div className="logo">{user.username}</div>
        <ul className='ullinks'>
          {user.email ?
            <>
              {/* <li className='list'><Link className='link' to={'/dashboard'}>Dashboard</Link></li> */}
              <li className='list'><Link className='link' to={'/usermanagement'}>User Management</Link></li>
              <li className='list'><Link className='link' to={'/rolemanagement'}>Role Management</Link></li>
              <li className='list'><button onClick={logoutbtn} className='logoutbtn'>Logout</button></li>
            </> : <>
              {/* <li className='list'><Link className='link' to={'/'}>Home</Link></li> */}
              <li className='list'><Link className='link' to={'/login'}>Login</Link></li>
              <li className='list'><Link className='link' to={'/register'}>Register</Link></li>
              {/* <li className='list'><Link className='link' to={'/usermanagement'}>User Management</Link></li> */}
              {/* <li className='list'><Link className='link' to={'/rolemanagement'}>Role Management</Link></li> */}
              
            </>
          }
        </ul>

        <button className='mobilebar' onClick={() => { document.querySelector('.mobilelinks').classList.toggle('show') }}><FaBars className='fbar'/></button>

        <div className='mobilelinks'>
          {user.email ?
            <>
              {/* <li className='list'><Link className='link' to={'/dashboard'}>Dashboard</Link></li> */}
              <li className='mlist'><Link className='mlink' to={'/usermanagement'}>User Management</Link></li>
              <li className='mlist'><Link className='mlink' to={'/rolemanagement'}>Role Management</Link></li>
              <li className='mlist'><button onClick={logoutbtn} className='logoutbtn'>Logout</button></li>
            </> : <>
              {/* <li className='mlist'><Link className='mlink' to={'/'}>Home</Link></li> */}
              {/* <li className='mlist'><Link className='mlink' to={'/usermanagement'}>User Management</Link></li>
              <li className='mlist'><Link className='mlink' to={'/rolemanagement'}>Role Management</Link></li> */}
              <li className='mlist'><Link className='mlink' to={'/login'}>Login</Link></li>
              <li className='mlist'><Link className='mlink' to={'/register'}>Register</Link></li>
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar
