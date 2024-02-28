import React from 'react';

const FriendTile = ({ friend, handleClick, id }) => {

  return (
    <div className={`friend-tile ${!friend.read ? 'unread' : ''}`} onClick={() => handleClick(id)}>
      <img src={friend.profileImage} className='profile-image' />
      <div className="tile-text">
        <p className="friend-name">{`${friend.firstName} ${friend.lastName}`}</p>
        <p className="last-message">{`${friend.messages[friend.messages.length - 1].message}`}</p>
      </div>
    </div>
  )
}

export default FriendTile