import React, { useEffect, useState } from 'react'
import axios from 'axios';
const ProductDetails = (props) => {
    const [product, setProduct] = useState({});
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const link = `http://localhost:8000/api/product/${props.id}`;

    useEffect(() => {
        console.log("here")
        axios.get(link)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, [])


    const deleteProduct = (productID) => {
        axios.delete('http://localhost:8000/api/product/' + productID)
    }

    const updateProduct = (e) => {
        e.preventDefault();

        product.title = title;
        product.price = price;
        product.description = description;
        setProduct(product);

        axios.put(link, {
            title,    
            price,
            description      
        })
            .then(res => console.log(res));
    }

    return (

        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label><br />
                    <input type="text" 
                    name="title" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="number" 
                    name="price"
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" 
                    name="description"
                    value={description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <input type="submit" />
                <button type="button" onClick={(e)=>{deleteProduct(props.id)}} className="btn-delete">
                    <a href={'http://localhost:3000/'}>Delete</a>
                </button>
            </form>
        </div>
    )
}
export default ProductDetails;
