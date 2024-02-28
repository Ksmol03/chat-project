import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import ChatWindow from './components/ChatWindow'
import './assets/styles.css'
import DATA from './data.json'

const App = () => {
  const[data, setData] = useState(DATA);

  return (
    <main>
      <Sidebar friends={data} />
      <ChatWindow />
    </main>
  )
}

export default App