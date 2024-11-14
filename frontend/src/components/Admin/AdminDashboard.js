import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllUsers } from '../../utils/api';
import './adminStyles/admindash.css';

const AdminDashboard = () => {
    const [usersCount, setUsersCount] = useState(0);
    const [pendingQueries, setPendingQueries] = useState(0);

    useEffect(() => {
        // Fetch users count and pending queries (for simplicity, assuming these values)
        const fetchStats = async () => {
            const users = await getAllUsers();
            setUsersCount(users.length);
            setPendingQueries(5); // Mock data, replace with actual logic
        };
        fetchStats();
    }, []);

    return (
        <div className="admin-dashboard">
            {/* Left Sidebar */}
            <div className="sidebar">
                <h3>Admin Dashboard</h3>
                <h3>Power of Empowerment</h3>
                
                
            </div>

            {/* Center Content */}
            <div className="center-content">
                <h1>Welcome to the Admin Dashboard</h1>
                 
                <div className="stats-container">
                    <div className="stat-box">
                    
                        <h3 >Total Users</h3>
                        <p>{usersCount}</p>
                    </div>

                    <div className="stat-box">
                        <h3>Pending Queries</h3>
                        <p>{pendingQueries}</p>
                    </div>
                </div>

                <div className="notification-container">
                    <h3>Recent Updates</h3>
                    <p>New users have registered. Check their profiles for more information.</p>
                </div>
            </div>

            {/* Right Section (Manage Users) */}
            <div className="manage-users">
                <h2>Manage Users</h2>
                <Link to="/admin/manage-users">Go to Manage Users</Link>
            </div>
        </div>
    );
};

export default AdminDashboard;