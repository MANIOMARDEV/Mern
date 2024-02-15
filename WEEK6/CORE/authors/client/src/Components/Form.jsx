import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
const Form = () => {

    const [name, setName] = useState('')
    const [errors, setErrors] = useState({})

    const navigate = useNavigate()

    const submitHandler = (e) => {

        e.preventDefault()
        axios.post('http://localhost:8000/api/addAuthor', {
            name
        }).then((res) => {
            console.log(res)
            navigate('/')
        })
        .catch((err) => {
            console.log(err)
            setErrors(err.response.data.errors)

        })


    }


return (
    <div>
        <Link to= "/" >Home</Link>
        <p className='purple-text' >Add a new author:</p>
        <form onSubmit={submitHandler}>
            <label>Name: </label>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            {errors.name ? <span> {errors.name.message} </span> : null}
            <button>Submit</button> 
            <button onClick={() => navigate('/')} >Cancel</button>
        </form>
    </div>
)
}

export default Form