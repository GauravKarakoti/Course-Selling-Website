import React, { useState } from 'react';
import axios from '../../services/api';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/v1/user/login', { email, password });
      localStorage.setItem('userToken', response.data.token);
      alert('Login successful!');
    } catch (error) {
      alert('Login failed: ' + error.response?.data?.message);
    }
  };

  return (
    <div>
      <h2>User Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default UserLogin;
