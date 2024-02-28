import React, { useState } from 'react'
import Search from './Search'
import FriendTile from './FriendTile'

const Sidebar = ({ data, setToRead }) => {
  const[search, setSearch] = useState('');


  const filteredData = data.filter(friend => {
    const fullName = friend.firstName + ' ' + friend.lastName;
    return (fullName.toLocaleUpperCase().includes(search.toLocaleUpperCase()));
  })

  return (
    <div className='sidebar'>
        <Search search={search} handleChange={setSearch}/>
        {filteredData.map((friend, i) => (
          <FriendTile friend={friend} handleClick={setToRead} id={i} key={i} />
        ))}
    </div>
  )
}

export default Sidebar