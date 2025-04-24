import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const key = 'name';

  const getStoredValue = () => {
    try {
      const item = localStorage.getItem(key);
    } catch (error) {}
  };

  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem('name');
    return savedName ? savedName : 'Serhii';
  });

  useEffect(() => {
    localStorage.setItem('name', name);
  }, [name]);

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
