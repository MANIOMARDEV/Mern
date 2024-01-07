import React, { useState } from 'react';
import './App.css';
import BoxGenerator from './components/BoxGenerator';
import BoxDisplay from './components/BoxDisplay';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [boxes,setBoxes] = useState([
    {
      color: "red",
      height: "200px",
      width: "200px"
    },
    {
      color: "brown",
      height: "200px",
      width: "200px"
    }
  ])

  //form step 1: the inputs
  const [form, setForm] = useState ({
    color:"",
    height:"",
    width:"",
  })

  //form step 2: fx state to value
  const handleForm = e => {
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }

  //form step 3: submit fx
  const addBox = (e) => {
    e.preventDefault();
    setBoxes([...boxes, form])
    setForm({
      color: "",
      height: "",
      width: ""
    })
  }

  return (
    <>
    <BoxGenerator inputs={form} addBox={addBox} handleForm={handleForm}/>
    <div className="App">
      {
        boxes.map((boxes, i) =>{
          return <BoxDisplay
                    key={i}
                    color={boxes.color}
                    height={boxes.height}
                    width={boxes.width}
                  />
        })
      }
    </div>
    </>
  );
}

export default App;
