import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('Hello, World!');

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => setMessage('New Message!')}>Change Message</button>
    </div>
  );
}

export default App;