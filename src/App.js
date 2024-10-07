import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const deleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  const editUser = (index, updatedUser) => {
    const updatedUsers = users.map((user, i) => (i === index ? updatedUser : user));
    setUsers(updatedUsers);
  };

  return (
    <div className="App">
      <h1>User Management</h1>
      <UserForm addUser={addUser} />
      <UserList users={users} deleteUser={deleteUser} editUser={editUser} />
    </div>
  );
}

export default App;
