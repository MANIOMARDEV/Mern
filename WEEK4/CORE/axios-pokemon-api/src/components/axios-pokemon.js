import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AxiosPoke = (props) => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        axios
            .get('https://pokeapi.co/api/v2/pokemon?limit=1118')
            .then((response) => {
                setPokemon(response.data.results);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            {pokemon.map((element, index) => (
                <div key={index}>
                    <p>Pokemon Name: {element.name}</p>
                </div>
            ))}
        </div>
    )
}

export default AxiosPoke;