import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import { Link, useParams, useHistory } from 'react-router-dom';

const EditAuthor = () => {
    const [author, setAuthor] = useState({ _id: '', name: '' }); // Initial state for author
    const [name, setName] = useState('');
    const history = useHistory();
    const { id } = useParams();
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(response => {
                setAuthor(response.data);
                setName(response.data.name);
            })
            .catch(err => console.log(err));
    }, [id]); // id added to dependency array

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${author._id}`, { name })
            .then(res => {
                console.log(res.data);
                history.push("/authors");
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            })
    }

    return (
        <div>
            <Link to="/authors" style={{ color: 'dodgerblue' }}>Home</Link>
            {author && // Conditional rendering for author data
                <>
                    <h3 className='mt-3'>edit {author.name}</h3>
                    <AuthorForm onSubmitHandler={onSubmitHandler} name={name} setName={setName} />
                </>
            }
            {errors.map((err, index) => <p style={{ color: "red" }} key={index}>{err}</p>)}
        </div>
    )
}

export default EditAuthor;
