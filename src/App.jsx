import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import ChatWindow from './components/ChatWindow'
import './assets/styles.css'
import DATA from './data.json'
import ChooseChat from './components/ChooseChat'
import './assets/styles.css'

const App = () => {
  const[data, setData] = useState(DATA);
  const[selectedUser, setSelectedUser] = useState(-1);

  const setToRead = (id) => {
    setData(data.map(friend => friend.id == id ? {...friend, 'read': true} : friend));
    setSelectedUser(id);
  }

  const addMessage = (text) => {
    setData(data.map((friend, i) => i == selectedUser ? {...friend, 'messages': [...friend.messages, {'type': 'to', 'message': text}]} : friend));
  }

  return (
    <main>
      <Sidebar data={data} setToRead={setToRead} />
      {selectedUser == -1 ? <ChooseChat /> : <ChatWindow messages={data[selectedUser].messages} addMessage={addMessage}/>}
    </main>
  )
}

export default App