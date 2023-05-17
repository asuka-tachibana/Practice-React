import React, { useState } from 'react';

const Profile = ({ user, onProfileUpdate }) => {
  const [bio, setBio] = useState(user.bio || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the new bio to the parent component
    onProfileUpdate({ ...user, bio });
  };

  return (
    <div>
      <h1>{user.username}'s Profile</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Bio:
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Profile;
