import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import PlayersTable from '../components/PlayersTable'

const PlayersTableView = () => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then((res)=>{
                setPlayers(res.data);
            })
    })
    const deleteFromDom = (id) => {
        setPlayers(players.filter((player)=>player._id!==id))
    }
    return (

        <div className='bg-light'>
            <div className='h3 border-5 py-3'>


                <div className='py-4 border border-2 w-75 mx-auto'>
                    <Link to={"/players/list"}>List</Link><span> | </span>
                    <Link to={"/players/new"}>Add Player</Link>
                    <PlayersTable players={players} deleteFromDom={deleteFromDom}/>
                </div>
            </div>
        </div>
    )
}

export default PlayersTableView