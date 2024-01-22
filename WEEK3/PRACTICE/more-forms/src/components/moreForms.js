import React, { useState } from 'react';

const UserForm = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errorsObj = {};

    if (firstName.length < 2) {
      errorsObj.firstName = 'Name must be at least 2 characters';
    }

    if (lastName.length < 2) {
      errorsObj.lastName = 'Name must be at least 2 characters';
    }

    if (email.length < 5) {
      errorsObj.email = 'Email must be at least 5 characters';
    }

    if (password.length < 8) {
      errorsObj.password = 'Password must be at least 8 characters';
    }

    if (confPassword.length < 8 || password !== confPassword) {
      errorsObj.confPassword = 'Passwords do not match or are too short';
    }

    setErrors(errorsObj);
    return Object.keys(errorsObj).length === 0;
  };

  const createUser = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const newUser = { firstName, lastName, email, password };

      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setConfPassword('');

      // Handle newUser data as needed (e.g., send it to a server, etc.)
      console.log('New User:', newUser);
    }
  };

  return (
    <>
      <form onSubmit={createUser}>
        <div>
          <p>
            <label>First Name: </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </p>
          {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName}</p>}
        </div>
        <div>
          <p>
            <label>Last Name: </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </p>
          {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName}</p>}
        </div>
        <div>
          <p>
            <label>Email: </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </p>
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>
        <div>
          <p>
            <label>Password: </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </p>
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>
        <div>
          <p>
            <label>Confirm Password: </label>
            <input
              type="password"
              value={confPassword}
              onChange={(e) => setConfPassword(e.target.value)}
            />
          </p>
          {errors.confPassword && (
            <p style={{ color: 'red' }}>{errors.confPassword}</p>
          )}
        </div>
        <input type="submit" value="Create User" />
      </form>
      <h2>Your Form Data</h2>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <p>Confirmed Password: {confPassword}</p>
    </>
  );
};

export default UserForm;
