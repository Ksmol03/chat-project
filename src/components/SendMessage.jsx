import React, { useState } from 'react'

const SendMessage = ({ handleSend }) => {
  const[message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSend(message);
    setMessage('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)}/>
      <button type="submit">Send</button>
    </form>
  )
}

export default SendMessage