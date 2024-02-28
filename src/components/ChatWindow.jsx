import React from 'react'
import Chat from './Chat'
import SendMessage from './SendMessage'

const ChatWindow = ({ data, setData }) => {
  return (
    <div className='chat-window'>
        <Chat />
        <SendMessage />
    </div>
  )
}

export default ChatWindow