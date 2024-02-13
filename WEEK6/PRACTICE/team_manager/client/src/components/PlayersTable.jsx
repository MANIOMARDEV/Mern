import React from 'react'
import DeleteButton from './DeleteButton';

const PlayersTable = (props) => {
    const { players, deleteFromDom } = props;
    return (
        <table className='table'>
            <thead className='thead-dark'>
                <tr className='row'>
                    <th className='col'>Team Name</th>
                    <th className='col'>Preferred Position</th>
                    <th className='col'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {players.map((player, i) => <tr className='row'>
                    <td className='col'>{player.name}</td>
                    <td className='col'>{player.position}</td>
                    <td className='col'><DeleteButton id={player._id} onDeleteSuccess={deleteFromDom}/></td>
                </tr>
                )}
            </tbody>
        </table>
    )
}

export default PlayersTable