import React, { useState } from 'react';
import './UserList.css';

const UserList = ({ users, deleteUser, editUser }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({});

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const saveEdit = () => {
    editUser(editIndex, editData);
    setEditIndex(null);
  };

  return (
    <div className="user-list">
      <h2>User List</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              {editIndex === index ? (
                <>
                  <td><input type="text" name="firstName" value={editData.firstName} onChange={handleEditChange} /></td>
                  <td><input type="text" name="lastName" value={editData.lastName} onChange={handleEditChange} /></td>
                  <td><input type="text" name="phoneNumber" value={editData.phoneNumber} onChange={handleEditChange} /></td>
                  <td><input type="email" name="email" value={editData.email} onChange={handleEditChange} /></td>
                  <td><input type="text" name="address" value={editData.address} onChange={handleEditChange} /></td>
                  <td>
                    <button onClick={saveEdit}>Save</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{user.email}</td>
                  <td>{user.address}</td>
                  <td>
                    <button className="edit-btn" onClick={() => { setEditIndex(index); setEditData(user); }}>Edit</button>
                    <button className="delete-btn" onClick={() => deleteUser(index)}>Delete</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
