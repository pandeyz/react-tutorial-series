import React, { useState } from 'react';

import AddUser from './components/AddUser';
import ListUsers from './components/ListUsers';

function App() {

  const [users, setusers] = useState([]);
  const [userId, setUserId] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  const adduser = (user) => {
    if( userId === null )       // Add User
    {
      let existingUsers = [...users];
      existingUsers.push(user);
      setusers(existingUsers);
    }
    else                        // Update user
    {
      let existingUsers = [...users];
      existingUsers[userId] = user;
      setusers(existingUsers);
      setUserId(null);
      setUserDetails(null);
    }
  }

  const deleteUser = (index) => {
    let existingUsers = [...users];
    existingUsers.splice(index, 1);
    setusers(existingUsers);
  }

  const editUser = (index) => {
    setUserId(index);
    setUserDetails(users[index]);
  }

  return (
    <div className="container" style={{ marginTop: '20px' }}>
      <AddUser handleAddUser={adduser} userDetails={userDetails} />
      <hr />
      <ListUsers users={users} handleDeleteUser={deleteUser} handleEditUser={editUser} />
    </div>
  );
}

export default App;