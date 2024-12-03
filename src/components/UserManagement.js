import React, { useState, useEffect } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const UserManagement = () => {
  const navigate = useNavigate();
  const [local, setLocal] = useState([]);
  const [users, setUsers] = useState(null);
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const U = localStorage.getItem('user');
  const r = localStorage.getItem('role');

  if (!U) {
    navigate('/login');
  }

  useEffect(() => {
    // Fetch the mock data from the JSON file
    fetch('/mock-data/userinfo.json')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching mock data:', error));

    // Set initial values
    const action = localStorage.getItem('action');
    // console.log(action);

    const adduser = localStorage.getItem('createdA');
    const adduser1 = localStorage.getItem('createdA1');

    if (action && adduser && adduser1) {
      setLocal([...local, JSON.parse(action), JSON.parse(adduser), JSON.parse(adduser1)]);
      // console.log(local);

    } else if (action && adduser) {
      setLocal([...local, JSON.parse(action), JSON.parse(adduser)]);
      // console.log(local);
    } else if (adduser && adduser1) {
      setLocal([...local, JSON.parse(adduser), JSON.parse(adduser1)]);
      // console.log(local);
    } else if (adduser1) {
      setLocal([...local, JSON.parse(adduser1)]);
      // console.log(local);
    } else if (action) {
      setLocal([...local, JSON.parse(action)]);
      // console.log(local);
    }



    // const action = localStorage.getItem('action');
    // const adduser = localStorage.getItem('createdA')
    // if (action) {
    //   // console.log(JSON.parse(action));
    //   setLocal(JSON.parse(action))
    // }
    // if (adduser) {
    //   const l = JSON.parse(adduser);
    //   setLocal([...users, l]);
    //   // console.log(local);
    // }
    // console.log(local);

  }, []);
  // console.log(users);

  const addUser = () => {
    const user = { username, email, password, role, from: 'local' };
    const permitions = { username, role, status: "Active", permissions: ["Read"] }
    const existuser = localStorage.getItem('createdU');
    if (existuser) {
      localStorage.setItem('createdU1', JSON.stringify(user));
      localStorage.setItem('createdA1', JSON.stringify(permitions));
    } else {
      localStorage.setItem('createdU', JSON.stringify(user));
      localStorage.setItem('createdA', JSON.stringify(permitions));
    }

    setEmail('')
    setPassword('');
    setRole('')
    setUserName('')

    // setUsers([...users, { ...newUser, id: users.length + 1 }]);
    // setNewUser({ name: '', role: '', status: 'Active', permissions: [] });
  };

  const deleteUser = (id) => {

    setUsers(users.filter((user) => user.id !== id));
    // localStorage.removeItem('')
  };
  // console.log(local);
  const deleteLoaclUser = (id) => {
    console.log(id);
    setLocal(local.filter((user) => user.username !== id));
  }



  const toggleStatus = (id) => {
    setUsers(users.map((user) => user.id === id ? { ...user, status: user.status === 'Active' ? 'Inactive' : 'Active' } : user));
  };

  return (
    <div className="usersbox">
      <div className="user-management">
        <h2>User Management</h2>
        <div className="userheading">
          <div className='userheads'>Name</div>
          {/* <div className='userheads'>Role</div> */}
          <div className='userheads'>Status</div>
          {r === 'Admin' &&
            <>
              <div className='userheads'>Actions</div>
              <div className='userheads'>Delete</div>
            </>
          }

        </div>
        <div className="user-list">
          {users && users.map((user) => (
            <div className="user-item" key={user.id}>
              <div className='userdata'>{user.username}</div>
              {/* <span>{user.role}</span> */}
              <div style={{ color: user.status === 'Active' ? 'green' : 'red' }} className='userdata'>{user.status}</div>
              {r === 'Admin' &&
                <><button style={{ backgroundColor: user.status === 'Active' ? '#ff4726' : 'green' }} onClick={() => toggleStatus(user.id, user.status)}>
                  {user.status === 'Active' ? 'Deactivate' : 'Activate'}
                </button>
                  <button onClick={() => deleteUser(user.id)}>Delete</button>
                </>

              }

            </div>
          ))}
          {local && local.map((local) => (
            <div className="user-item" style={{ display: local.status === 'Active' ? 'flex' : 'none' }} key={local.id+1} >
              <div className='userdata'>{local.username}</div>
              <div style={{ color: local.status === 'Active' ? 'green' : 'red' }} className='userdata'>{local.status}</div>
              {r === 'Admin' &&
                <>
                  <button style={{ backgroundColor: local.status === 'Active' ? '#ff4726' : 'green' }} onClick={() => toggleStatus(local.id, local.status)}>
                    {local.status === 'Active' ? 'Deactivate' : 'Activate'}
                  </button>
                  <button onClick={() => deleteLoaclUser(local.username)}>Delete</button>
                </>
              }

            </div>
          ))
          }
        </div>
        {r === 'Admin' &&
          <div className="add-user">
            <div className="uesrinputbox">
              <input
                type="text"
                placeholder="UserName"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button style={{ backgroundColor: 'green' }} onClick={addUser}>Add User</button>
          </div>
        }

      </div>
    </div>
  );
};

export default UserManagement;
