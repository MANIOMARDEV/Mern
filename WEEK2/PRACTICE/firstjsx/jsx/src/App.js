import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloDojo from './components/Hello-Dojo';

function App() {
  const [number, setNumber] = useState(0);

  const incrementNumber = () => {
    setNumber(number + 1);
  };

  return (
    <div className="App">
      <HelloDojo />
      <button onClick={incrementNumber}>+</button>
      <p>Number: {number}</p>
    </div>
  );
}

export default App;