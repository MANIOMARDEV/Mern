import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'

const AllAuthors = () => {

    const [list,setList] = useState([])

    const navigate = useNavigate()

    const {id} = useParams()
    
    
    useEffect(() => {

        axios.get('http://localhost:8000/api/getAllAuthors')
        .then((res) => {
            setList(res.data)
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })

    } ,[])

    const deleteHandler =(authorId) => {

        axios.delete(`http://localhost:8000/api/deleteAuthor/${authorId}`)
        .then((res) => {
            console.log(res)

            const newList = list.filter((author) => author._id !== authorId)
            setList(newList)

            navigate('/')
        }) 
        .catch((err) => {
            console.log(err)
        })

    }

return (
    <div>
        <h1>Favorite Authors:</h1>
        <Link to="/newAuthor" >Add new Author</Link>
        <p className='purple-text' >We have quotes:</p>
        <table className='table table-striped'>
            <thead className=''>
                <tr>
                    <th scope='col' >Author</th>
                    <th scope='col' >Actions Available</th>
                </tr>
            </thead>
            <tbody>
                {
                    list.map((author) => (

                        <tr>
                            <td className='purple-text'> {author.name} </td>
                            <td> <button className='btn btn-success' onClick={() => navigate(`/editAuthor/${author._id}`) } >Edit</button> 
                            <button className='btn btn-danger' onClick={() => deleteHandler(author._id)} >Delete</button>  </td>
                            
                        </tr>

                    ))
                }
            </tbody>
        </table>
    </div>
)
}

export default AllAuthors
