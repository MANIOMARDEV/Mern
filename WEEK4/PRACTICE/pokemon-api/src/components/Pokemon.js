import React, {useState, useEffect} from 'react';

const Poke = (props) => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=1118')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
}, []);

return (
        <div>
            {pokemon.length > 0 && pokemon.map((pokeMn, index)=>{
                return (<div key={index}>{pokeMn.name}</div>)
            })}
        </div>
    );
}

export default Poke;