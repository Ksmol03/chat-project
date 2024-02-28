import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import ChatWindow from './components/ChatWindow'
import './assets/styles.css'
import DATA from './data.json'

const App = () => {
  const[data, setData] = useState(DATA);

  const setToRead = (id) => {
    setData(data.map((friend, i) => i == id ? {...friend, "read": true} : friend));
  }

  return (
    <main>
      <Sidebar data={data} setToRead={setToRead} />
      <ChatWindow data={data} setData={setData}/>
    </main>
  )
}

export default App