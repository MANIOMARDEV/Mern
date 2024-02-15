import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'

const UpdateAuthor = () => {

    const [name, setName] = useState('')
    const [errors, setErrors] = useState({})

    // const [author, setAuthor] = useState({})

    const {id} = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneAuthor/${id}`)
        .then((res) => {
            setName(res.data.name)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const submitHandler = (e) => {

        e.preventDefault()

        axios.put(`http://localhost:8000/api/editAuthor/${id}`, {
            name
        })
        .then((res) => {
            console.log(res)
            navigate('/')
        })
        .catch((err) => {
            console.log(err.response.data.errors)
            setErrors(err.response.data.errors)
        })

    }



return (
    <div>
        <h1>Favorite Authors</h1>
        <Link to= "/" >Home</Link>
        <p className='purple-text' >Edit this author</p>
        <form onSubmit={submitHandler}>
            <label>Name: </label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> <br></br>
            {errors.name ? <span> {errors.name.message} </span> : null} <br></br>
            <button>Submit</button> 
            <button onClick={() => navigate('/')} >Cancel</button>
        </form>
    </div>
)
}

export default UpdateAuthor