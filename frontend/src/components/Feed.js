import React from 'react';


const Feed = () => {
  return (
    <div className="feedSection">
      <div className="feedItem">
        <p><strong>John Doe</strong> shared a post</p>
        <p>Here’s a cool post I wanted to share!</p>
        <img src="post-image.jpg" alt="Post" className="postImage" />
      </div>
      {/* Add more feed items dynamically */}
    </div>
  );
};

export default Feed;
