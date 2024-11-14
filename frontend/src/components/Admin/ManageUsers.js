import React, { useEffect, useState } from 'react';
import { getAllUsers, removeUser } from '../../utils/api';
import './adminStyles/manageUsers.css';

const ManageUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const data = await getAllUsers();
            setUsers(data);
        };
        fetchUsers();
    }, []);

    const handleRemove = async (userId) => {
        try {
            await removeUser(userId);
            setUsers(users.filter(user => user._id !== userId)); // Remove user from state
        } catch (error) {
            console.error("Error removing user", error);
        }
    };

    return (
        <div className="manage-users-container">
            <h1>Manage Users</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button onClick={() => handleRemove(user._id)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageUsers;