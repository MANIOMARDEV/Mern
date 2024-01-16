import axios from "axios";
import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Planets = (props) => {
    const { id } = useParams();
    // so you can pass id from home via props???
    const [apiData, setApiData] = useState({});
    const [isError, SetIsError] = useState(false);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
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
                <p>{apiData.climate}</p>
                <p>{apiData.terrain}</p>
                <p>{apiData.surface_water}</p>
                <p>{apiData.population}</p>

            </div>
        );
    } else {
        return (
            <p>error</p>
        )
    }
};

export default Planets;

