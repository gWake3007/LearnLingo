import { useLocalStorage } from './utils/customHocks/useLocalStorage.js';
import './App.css';

function App() {
  const [name, setName, removeName] = useLocalStorage('name', 'guest');

  return (
    <>
      <h1>Hello {name}!</h1>
      <input
        type="text"
        value={name}
        placeholder="Please enter your Name"
        onChange={e => setName(e.target.value)}
      />
      <button onClick={removeName}>Clear name</button>
    </>
  );
}

export default App;
