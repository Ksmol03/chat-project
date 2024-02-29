import React from 'react'
import Chat from './Chat'
import SendMessage from './SendMessage'

const ChatWindow = ({ messages, addMessage }) => {
  return (
    <div className='chat-window'>
        <Chat messages={messages} />
        <SendMessage handleSend={addMessage}/>
    </div>
  )
}

export default ChatWindow