import React from 'react'
import Chat from './Chat'
import SendMessage from './SendMessage'

const ChatWindow = ({ messages }) => {
  return (
    <div className='chat-window'>
        <Chat messages={messages} />
        <SendMessage />
    </div>
  )
}

export default ChatWindow