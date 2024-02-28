import React from 'react';

const FriendTile = ({ friend }) => {

  return (
    <div className='friend-tile'>
      <img src={friend.profile_image}  className="profile-image" />
    </div>
  )
}

export default FriendTile