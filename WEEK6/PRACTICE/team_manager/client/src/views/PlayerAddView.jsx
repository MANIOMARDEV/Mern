import React from 'react'
import PlayerForm from '../components/PlayerForm'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

const PlayerAddView = () => {
    return (
        <div className='bg-light'>
            <div className='h3 border-5 py-3'>

            

            <div className='py-4 border border-2 w-75 mx-auto'>
                <Link to={"/players/list"}>List</Link><span> | </span>
                <Link to={"/players/new"}>Add Player</Link>
            
            <PlayerForm />
            </div>
            </div>
        </div>
    )
}

export default PlayerAddView