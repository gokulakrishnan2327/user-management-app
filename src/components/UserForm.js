import React, { useState } from 'react';

const UserForm = ({ addUser }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    address: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { firstName, lastName, phoneNumber, email, address } = formData;
    if (!firstName || !lastName || !phoneNumber || !email || !address) {
      setError('All fields are required');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email format');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      addUser(formData);
      setFormData({ firstName: '', lastName: '', phoneNumber: '', email: '', address: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        placeholder="First Name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        placeholder="Last Name"
        onChange={handleChange}
      />
      <input
        type="number"
        name="phoneNumber"
        value={formData.phoneNumber}
        placeholder="Phone Number"
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        type="text"
        name="address"
        value={formData.address}
        placeholder="Address"
        onChange={handleChange}
      />
      <button type="submit">Add User</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default UserForm;
