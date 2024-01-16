import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Character = (props) => {
    const { id } = useParams();

    console.log(id)
    // so you can pass id from home via props???
    const [apiData, setApiData] = useState({});
    const [isError, SetIsError] = useState(false);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then((response) => {
                SetIsError(false);
                console.log(response.data)
                // not data(dot)results??
                setApiData(response.data)
            })
            .catch((err) => {
                console.log(err);
                SetIsError(true);
            });
    }, [props]);
    // change array to something 
    if (!isError) {
        return (
            <div>
                <h1>{apiData.name}</h1>
                <p>{apiData.height}</p>
                <p>{apiData.hair_color}</p>
                <p>{apiData.eye_color}</p>
                <p>{apiData.skin_color}</p>

            </div>
        );
    } else {
        return (
            <p>error</p>
        )
    }
};

export default Character;