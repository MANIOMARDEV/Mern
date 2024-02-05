import React, { useState } from 'react';
import { navigate } from '@reach/router';
import { Card } from '@material-ui/core';
import { Link } from '@reach/router';
import axios from 'axios';
import '../css/authorForm.css';

const AuthorForm = () => {
    const [ initName ] = useState("");
    const [ name, setName ] = useState(initName); 
    const [ errors, setErrors ] = useState([]); 

    const onSubmitHandler = e => {
        e.preventDefault();
        setErrors([]);
        console.log("name: " + name)
        axios.post('http://localhost:8000/api/authors', {name})
            .then(() => {navigate('/')})    
            .catch( err => {
                console.log("Error, couldn't submit new author " + err);
                // console.log(err.response.data.errors)
                setErrors(err.response.data.errors);
            })
            
    }

    return (
        <form className="authorForm" onSubmit={onSubmitHandler}>
            <Link to={"/"}>
                <button className="btn-nav">Home</button>
            </Link>
            <Card className="card">
                <div className="div-block">
                    <label>Name:</label>
                    <input className="nameField" 
                        type="text" 
                        placeholder={name}
                        onChange = {(e)=>setName(e.target.value)}
                    />
                    {
                        errors.name ? 
                            <p>{errors.name.message}</p>
                            : null
                    }
                </div>
                <div className="div-block">
                    <button className="btn-default-style" onClick={() => {navigate("/")}}>Cancel</button>
                    <input className="btn-default-style" type="submit" value="Submit"/>
                </div>
            </Card>

        </form>
    )
}
export default AuthorForm;