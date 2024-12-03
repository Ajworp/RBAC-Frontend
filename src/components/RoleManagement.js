import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RoleManagement = () => {

  const navigate = useNavigate();
  const permissions = ['Read', 'Write', 'Delete'];
  const [roles, setRoles] = useState(null);
  const [local, setLocal] = useState([]);
  const U = localStorage.getItem('user');
  const r = localStorage.getItem('role');


  useEffect(() => {
    // Fetch the mock data from the JSON file
    fetch('/mock-data/userinfo.json')
      .then((response) => response.json())
      .then((data) => setRoles(data))
      .catch((error) => console.error('Error fetching mock data:', error));

    // Set initial values
    const action = localStorage.getItem('action');
    const adduser = localStorage.getItem('createdA');
    if (action && adduser) {
      setLocal([...local, JSON.parse(action), JSON.parse(adduser)]);
      // console.log(local);
    } else if (action) {
      setLocal([...local, JSON.parse(action)]);
      // console.log(local);
    } else if (adduser) {
      setLocal([...local, JSON.parse(adduser)]);
      // console.log(local);
    }


    // const action = localStorage.getItem('action');
    // if(action){
    //   console.log(JSON.parse(action));
    //    setLocal(JSON.parse(action))
    // }
  }, []);



  const togglePermission = (roleId, permission) => {
    setRoles(roles.map((role) => {
      if (role.id === roleId) {
        const updatedPermissions = role.permissions.includes(permission)
          ? role.permissions.filter((perm) => perm !== permission)
          : [...role.permissions, permission];
        return { ...role, permissions: updatedPermissions };
      }
      return role;
    }));
  };
  if (!U) {
    navigate('/login');
  }

  return (
    <div className="rolebox">
      <div className="role-management">
        <h2>Role Management</h2>
        <div className="userheading">
          <div className='userheads'>Name</div>
          <div className='userheads'>Role</div>
          <div className='userheads'>Actions</div>
        </div>
        <div className="role-list">
          {roles && roles.map((role) => (
            <div className="role-item" key={role.id}>
              <div className='userdata'>{role.username}</div>
              <div className='userdata'>{role.role}</div>
              <div className="permissions">
                {r === 'Admin' ? (permissions.map((permission) => (
                  <label key={permission}>
                    <input
                      type="checkbox"
                      checked={role.permissions.includes(permission)}
                      onChange={() => togglePermission(role.id, permission)}
                    />
                    {permission}
                  </label>
                ))) : (
                  role.permissions.map((permission) => (
                    <div className='permition' key={permission}>{permission}</div>
                )))}
              </div>
            </div>
          ))}
          {local && local.map((local) => (
            <div className="role-item" key={local.id+1}>
              <div className='userdata'>{local.username}</div>
              <div className='userdata'>{local.role}</div>
              <div className="permissions">
                {r === 'Admin' && 
                permissions.map((permission) => (
                  <label key={permission}>
                    <input
                      type="checkbox"
                      //  checked={local && local.permissions.includes(permission)}
                      onChange={() => togglePermission(local.id, permission)}
                    />
                    {permission}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoleManagement;
