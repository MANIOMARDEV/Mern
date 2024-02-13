import axios from 'axios';
import React from 'react'

const DeleteButton = (props) => {
    const {id, onDeleteSuccess} = props;
    const deletePlayer = (e)=>{
        const confirmation = window.confirm("Are you sure?");
        if(confirmation){
        e.preventDefault();
        axios.delete('http://localhost:8000/api/players/'+id)
            .then((deleteConfirmation) => {
                onDeleteSuccess(id);
            })
            .catch(err=>console.log(err))
        }
    }
    return (
        <button className='btn btn-danger' onClick={deletePlayer}>Delete</button>
    )
}

export default DeleteButton