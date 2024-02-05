import React, { useState } from 'react';
import '../css/productForm.css';

const ProductForm = (props) => {
    const { initTitle, initPrice, initDescription, onSubmit } = props;
    const [ title, setTitle ] = useState(initTitle); 
    const [ price, setPrice ] = useState(initPrice);
    const [ description, setDescription ] = useState(initDescription);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmit({title,price,description});
    }

    //onChange to update fields
    return (
        <form className="productForm" onSubmit={onSubmitHandler}>
            <p>
                <label>Title:</label>
                <input className="titleField" 
                    type="text" 
                    value={title} 
                    onChange = {(e)=>setTitle(e.target.value)}
                />
            </p>
            <p>
                <label>Price:</label>
                <input className="priceField" 
                    type="number" 
                    value={price}
                    onChange = {(e)=>setPrice(e.target.value)}
                />
            </p>
            <p>
                <label>Description:</label>
                <input className="descField" 
                    type="text"
                    value={description} 
                    onChange = {(e)=>setDescription(e.target.value)}
                />
            </p>
            <input className="btn-submit" type="submit" value="Submit"/>
        </form>
    )
}
export default ProductForm;