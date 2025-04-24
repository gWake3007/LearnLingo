import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('Serhii');

  return (
    <>
      <h1>Hello {name}!</h1>
      <input
        type="text"
        value={name}
        placeholder="Please enter your Name"
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => setName('')}>Clear name</button>
    </>
  );
}

export default App;
