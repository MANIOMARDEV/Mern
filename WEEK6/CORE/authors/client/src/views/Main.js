// imports
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

// css
import '../css/main.css'

// components
import ShowAllAuthors from '../components/ShowAllAuthors';

const Main = () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const removeFromDom = authorId => {
        setAuthors(authors.filter(authors => authors._id !== authorId));
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res=>{
                setAuthors(res.data);
                setLoaded(true);
            });
    }, [])


    return (
        <div className="App">
            <Link to={"/authors/add"}>
                <button className="btn-nav">Add an author</button>
            </Link>
            <p>We have quotes by:</p>
            { loaded && 
                <ShowAllAuthors 
                    authors={authors} 
                    setAuthors={setAuthors}
                    removeFromDom={removeFromDom}
                />
            }
        </div>
    )
}
export default Main;
