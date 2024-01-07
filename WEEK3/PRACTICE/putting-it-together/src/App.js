import logo from './logo.svg';
import './App.css';
import Person from './components/Putting-Together';
import { useState } from 'react';

function App() {
  const [age, setAge] = useState(0);

  return (
    <div className="App">
      <>
        <Person firstName = {"Jane"} lastName = {"Doe"} age = {45} hairColor = {"Black"} />
        <Person firstName = {"John"} lastName = {"Smith"} age = {88} hairColor = {"Brown"} />
        <Person firstName = {"Millard"} lastName = {"Fillmore"} age = {50} hairColor = {"Brown"} />
        <Person firstName = {"Maria"} lastName = {"Smith"} age = {62} hairColor = {"Brown"} />
        {/* <button onClick = {() => setAge(age + 1)}></button> */}
      </>
    </div>

  );
}

export default App;
