import React, { useState } from 'react'
import Search from './Search'
import FriendTile from './FriendTile'

const Sidebar = ({ data, setToRead }) => {
  const[search, setSearch] = useState('');


  const filteredData = data.filter(friend => {
    const fullName = friend.firstName + ' ' + friend.lastName;
    return (fullName.toLocaleUpperCase().includes(search.toLocaleUpperCase()));
  }).sort((a, b) => a.read == b.read ? 0 : a.read == true ? 1 : -1)

  return (
    <div className='sidebar'>
        <Search search={search} handleChange={setSearch}/>
        {filteredData.map(friend => (
          <FriendTile friend={friend} handleClick={setToRead} key={friend.id} />
        ))}
    </div>
  )
}

export default Sidebar