import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './adminStyles/adminlogin.css';

function Admin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/admin/login', { 
        username, 
        password 
      });
      
      if (response.status === 200) {
        alert(response.data.message);
        localStorage.setItem('role', 'admin'); // Store the role

        navigate('/admin-dashboard');
      }
    } catch (error) {
      console.error('Admin login error', error);
      alert(error.response?.data?.message || 'Admin login failed');
    }
  };

  return (
   <div className='background'>
    
    <div className="admin-container">
    <div className="title">Admin Login
      <form className="admin-form" onSubmit={handleAdminLogin}>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          placeholder="Admin Username" 
          required 
          />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password" 
          required 
          />
        <button type="submit">Login</button>
      </form>
    </div></div></div>
  );
}

export default Admin;