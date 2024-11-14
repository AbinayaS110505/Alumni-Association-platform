import axios from 'axios';

// Set up axios instance
const api = axios.create({
    baseURL: 'http://localhost:5000/api', // Base URL for your backend
});

// Function to login admin
export const adminLogin = async (data) => {
    const response = await api.post('/admin/login', data);
    return response.data;
};

// Function to fetch all users (admin)
export const getAllUsers = async () => {
    const token = localStorage.getItem('adminToken');
    const response = await api.get('/admin/users', {
        headers: {
            'x-auth-token': token, // Send token in the request header
        },
    });
    return response.data;
};

// Function to remove a user (admin)
export const removeUser = async (userId) => {
    const token = localStorage.getItem('adminToken');
    await api.delete(`/admin/user/${userId}`, {
        headers: {
            'x-auth-token': token,
        },
    });
};
