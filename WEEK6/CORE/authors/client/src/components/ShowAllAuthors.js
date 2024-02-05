import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';

import '../css/showAllAuthors.css';

const ShowAllAuthors = (props) => {
    const [ authors, setAuthors ] = useState([]);

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId))
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => setAuthors(res.data));
    }, [authors])

    return (
        <div className="showAllAuthors">
            <table>
                <tbody>
                <tr>
                    <th className="author-header">Author</th>
                    <th className="actions-header">Actions Available</th>
                </tr>
                {
                    authors.map( (author, index) => {
                        return ( 
                            <tr className="singleAuthor" key={index}>
                                <td className="author-name">
                                    {author.name}
                                </td>
                                <td >
                                    <Link to={"/authors/edit/" + author._id}>
                                        <button className="btn-edit">Edit</button>
                                    </Link>
                                    <DeleteButton 
                                        authorId={author._id} 
                                        successCallback={()=>removeFromDom(author._id)}
                                    />
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>

    )
}
export default ShowAllAuthors;
