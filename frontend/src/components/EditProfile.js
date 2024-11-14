import React, { useState } from 'react';

const EditProfile = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [mentorStatus, setMentorStatus] = useState(false);

  const handleSave = () => {
    // Logic to save the profile data to the database
    console.log('Profile updated:', { name, company, mentorStatus });
  };

  return (
    <div className="editProfileForm">
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <label>
        Willing to be a Mentor?
        <input
          type="checkbox"
          checked={mentorStatus}
          onChange={(e) => setMentorStatus(e.target.checked)}
        />
      </label>
      <button onClick={handleSave}>Save Changes</button>
    </div>
  );
};

export default EditProfile;
