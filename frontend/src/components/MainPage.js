import React from 'react';
import { Link, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import UserProfile from './UserProfile';
import Feed from './Feed';
import Chat from './Chat';
// import EditProfile from './EditProfile';
// import AddPost from './AddPost';

import './MainPage.css';

const MainPage = () => {
  return (
    <div className="mainPage">
      <header className="header">
        <div className="logo">Reconnectify</div>
        <input type="text" className="searchBar" placeholder="Search..." />
      </header>

      <div className="content">
        {/* Left Sidebar - User Profile */}
        <div className="profile">
          <UserProfile />
          <Link to="/edit-profile" className="editProfile">Edit Profile</Link>
          <Link to="/add-post" className="addPost">Add a Post</Link>
        </div>

        {/* Center - Feed Section */}
        <div className="feed">
          <Routes>
            <Route path="/feed" element={<Feed />} />
            {/* Add additional routes if needed */}
          </Routes>
        </div>

        {/* Right Sidebar - Chat Section */}
        <div className="chat">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
