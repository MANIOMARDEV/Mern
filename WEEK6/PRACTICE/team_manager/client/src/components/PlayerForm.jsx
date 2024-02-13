import React, { useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';

const PlayerForm = () => {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [errors, setErrors] = useState([]);
    const [messageColor, setMessageColor] = useState("");
    const [validated, setValidated] = useState(true);
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/players', { name, position })
            .then((res) => {
                setName('');
                setPosition('');
                console.log(res);
                setErrors([res.data.name+" added successfuly"]);
                setMessageColor("green");
                setValidated(true);
            })
            .catch((err) => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setMessageColor("red");
                setErrors(errorArr);
            })
    }
    const validateName = (name) => {
        setName(name);
        if(name.length<2){
            setValidated(true);
        }
        else{
            setValidated(false);
        }
    }
    return (
        <div className='border w-75 mx-auto'>
            <h1>Add Player</h1>
            <form onSubmit={handleSubmit} className="form">
                {errors.map((err, index) => <p key={index} style={{color:messageColor}}>{err}</p>)}
                <div className='form-group my-4'>
                    <label className='my-1'>Player Name: </label>
                    <input className='form-control w-50 mx-auto' type='text' onChange={e => validateName(e.target.value)} value={name} />
                </div>
                <div className='form-group my-4'>
                    <label className='my-1'>Preferred Position: </label>
                    <input  className='form-control w-50 mx-auto'  type='text' onChange={e => setPosition(e.target.value)} value={position} />
                </div>
                <button className='btn btn-primary mx-auto my-1' disabled={validated}>Submit</button>
            </form>
        </div>
    )
}

export default PlayerForm