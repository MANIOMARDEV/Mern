import React, { useState } from 'react';

const BoxGenerator = props => {
    const {inputs, addBox, handleForm} = props;

    return(
        <form className="text-center w-25 p-4" onSubmit={addBox}>
            <h2>Add a box:</h2>
            <div className="form-group">
                <label>Color:</label>
                <input className="form-control" type="text" name="color" value={inputs.color} onChange={handleForm}/>
            </div>
            <div className="form-group">
                <label>Height:</label>
                <input className="form-control" type="text" name="height" value={inputs.height} onChange={handleForm}/>
            </div>
            <div className="form-group">
                <label>Width:</label>
                <input className="form-control" type="text" name="width" value={inputs.width} onChange={handleForm}/>
            </div>
            <button className="btn btn-primary" type="submit">Add a box </button>
        </form>

    );
}

export default BoxGenerator;