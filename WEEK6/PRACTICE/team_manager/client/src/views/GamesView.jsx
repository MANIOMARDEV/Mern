import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import GamePlayersTable from '../components/GamePlayersTable';

const GamesView = () => {
    const {num} = useParams();
    const [loaded, setLoaded] = useState(false);
    const [players, setPlayers] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/players')
            .then((res)=>{
                setPlayers(res.data);
                setLoaded(true);
            })
    })
    const changeGameStatus = (game, id, stat) => {
        const tbuReq = {};
        tbuReq[game]=stat;
        axios.put('http://localhost:8000/api/players/'+id, tbuReq)
            .then((res)=>{
                setPlayers(players.map((player)=>player._id===id?player[game]=stat:''))
            })
            .catch(err=>console.log(err))
    }
    
    return (
        <div>
            <Link to={"/status/game/1"} style={num==='1'?{color:'black', fontWeight:"bold"}:{}}>Game1</Link><span> | </span>
            <Link to={"/status/game/2"} style={num==='2'?{color:'black', fontWeight:"bold"}:{}}>Game2</Link><span> | </span>
            <Link to={"/status/game/3"} style={num==='3'?{color:'black', fontWeight:"bold"}:{}}>Game3</Link>
            {loaded && <GamePlayersTable num={num} players={players} changeGameStatus={changeGameStatus}/>}
        </div>
    )
}

export default GamesView