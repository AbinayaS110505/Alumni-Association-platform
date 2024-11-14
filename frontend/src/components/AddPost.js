import React, { useState } from 'react';

const AddPost = () => {
  const [postText, setPostText] = useState('');
  const [image, setImage] = useState(null);

  const handlePost = () => {
    // Logic to save the post data to the database
    console.log('Post created:', { postText, image });
  };

  return (
    <div className="addPostForm">
      <textarea
        placeholder="What’s on your mind?"
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <button onClick={handlePost}>Post</button>
    </div>
  );
};

export default AddPost;
