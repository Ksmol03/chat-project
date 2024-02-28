import React from 'react'

const Chat = ({ messages }) => {
  return (
    <div className='chat'>
      {messages.map((message, i) => (
        <div key={i} className={message.type == 'to' ? 'mess-to' : message.type == 'from' ? 'mess-from' : ''} >{message.message}</div>
      ))}
    </div>
  )
}

export default Chat