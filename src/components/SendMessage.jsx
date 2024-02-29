import React, { useState } from 'react'

const SendMessage = ({ handleSend }) => {
  const[message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSend(message);
    setMessage('');
  }

  return (
    <form className='send-message' onSubmit={handleSubmit}>
      <input type="text" name="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Send message...' autoComplete='off'/>
      <button type="submit"></button>
    </form>
  )
}

export default SendMessage