import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import { Card } from '@material-ui/core';
import { Link } from '@reach/router';
import axios from 'axios';
import '../css/authorForm.css';

const AuthorEdit = (props) => {
    const [ initName ] = useState("");
    const [ name, setName ] = useState(initName); 
    const [errors, setErrors] = useState([]); 
    const [loaded, setLoaded] = useState(false); 
    let placeHolderName = "";

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/authors/'+ props.id, {name})
            .then(navigate("/"))
            .catch( err => {
                console.log("Error, couldn't update author " + err);
                setErrors(err.response.data.errors);
            })
    }

    useEffect(() => {
        setName(initName);
        setLoaded(true);
        axios.get('http://localhost:8000/api/authors/'+ props.id)
            .then( res => {setName(res.data.name)})
    }, [])

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
export default AuthorEdit;