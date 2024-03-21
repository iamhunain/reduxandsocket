import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

// Server URL
const SOCKET_URL = 'http://localhost:3000';

const Chat = () => {
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    const newSocket = io(SOCKET_URL);
    setSocket(newSocket);
    return () => newSocket.close();
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on('receiveMessage', (data) => {
        setChat((prev) => [...prev, data]);
      });
    }
  }, [socket]);

  const sendMessage = (e) => {
    e.preventDefault(); // Prevent form submission if you're using a form
    if (!socket) return;

    const messageData = { type: 'text', content: message };
    socket.emit('sendMessage', messageData);
    setMessage('');
  };

  const sendFile = () => {
    if (!socket || !selectedFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onload = () => {
      const fileData = { type: 'file', content: reader.result, fileName: selectedFile.name };
      socket.emit('sendMessage', fileData);
    };
    reader.onerror = error => console.log('Error: ', error);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send Message</button>
      <input type="file" onChange={handleFileChange} />
      <button onClick={sendFile}>Send File</button>
      <div>
        {chat.map((msg, index) => {
          if (msg.type === 'text') {
            return <p key={index}>{msg.content}</p>;
          } else if (msg.type === 'file') {
            // Assuming image for simplicity. Adjust rendering based on file type if necessary.
            return <img key={index} src={msg.content} alt={msg.fileName} style={{ width: 100, height: 100 }} />;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Chat;
