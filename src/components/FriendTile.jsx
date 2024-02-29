import React from 'react';

const FriendTile = ({ friend, handleClick }) => {
  const lastMessage = () => {
    if (friend.messages[friend.messages.length - 1].message.length > 80) {
      return `${(friend.messages[friend.messages.length - 1].message).slice(0, 80)}...`;
    } else {
      return friend.messages[friend.messages.length - 1].message;
    }
  }

  return (
    <div className={`friend-tile ${!friend.read ? 'unread' : ''}`} onClick={() => handleClick(friend.id)}>
      <img src={friend.profileImage} className='profile-image' height={100} />
      <div className="tile-text">
        <p className="friend-name">{`${friend.firstName} ${friend.lastName}`}</p>
        <p className="last-message">{lastMessage()}</p>
      </div>
    </div>
  )
}

export default FriendTile