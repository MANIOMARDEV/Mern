import React, { useState } from 'react'
import axios from 'axios';
import '../css/productform.css'

const ProductForm = () => {

    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', {
            title: title,    
            price: price,     
            description: description
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }

    //onChange to update fields
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title:</label>
                <input className="titleField" type="text" onChange = {(e)=>setTitle(e.target.value)}/>
            </p>
            <p>
                <label>Price:</label>
                <input className="priceField" type="number" onChange = {(e)=>setPrice(e.target.value)}/>
            </p>
            <p>
                <label>Description:</label>
                <input className="descField" type="text" onChange = {(e)=>setDescription(e.target.value)}/>
            </p>
            <input className="submitBtn" type="submit" value="Create"/>
        </form>
    )
}
export default ProductForm;