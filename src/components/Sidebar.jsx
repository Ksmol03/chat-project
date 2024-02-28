import React, { useState } from 'react'
import Search from './Search'
import FriendTile from './FriendTile'

const Sidebar = ({ friends }) => {
  const[search, setSearch] = useState('');

  return (
    <div className='sidebar'>
        <Search search={search} handleChange={setSearch}/>
        {friends.map((friend, i) => (
          <FriendTile friend={friend} key={i}/>
        ))}
    </div>
  )
}

export default Sidebar