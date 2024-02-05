import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import AuthorEdit from '../components/AuthorEdit'

const AuthorDetails = (props) => {
    const [author, setAuthors] = useState({});
    const [loaded, setLoaded] = useState(false);
    const link = `http://localhost:8000/api/authors/${props.id}`;

    useEffect(() => {
        axios.get(link)
            .then(res => {
                setAuthors(res.data);
                setLoaded(true);
            })
    }, [])

    return (
        <div>
            <p>Update an Author</p>
            { loaded && (
                <>
                    <AuthorEdit
                        id={props.id}
                        initName={author.name}
                    />
                </>
            )}
        </div>
    )
}
export default AuthorDetails;
