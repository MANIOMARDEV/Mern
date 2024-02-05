import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';

import '../css/showAllProducts.css';

const ShowAllProducts = (props) => {
    const {products, removeFromDom} = props;

    const deleteProduct = (productID) => {
        axios.delete('http://localhost:8000/api/product/' + productID)
            .then(res => {
                removeFromDom(productID)
            })
        console.log("deleted")
    }

    return (
        <div className="showAllProducts">
            <h2>All Products:</h2>
            {
                products.map( (product, index) => {
                    return ( 
                        <div className="singleProduct" key={index}>
                            <p>Title: {product.title}</p>
                            <p>Price: {product.price}</p>
                            <p>Description: {product.description}</p>
                            <button type="button"><a href={`http://localhost:3000/product/${product._id}`}>Edit</a></button>
                            <button type="button" onClick={(e)=>{deleteProduct(product._id)}} className="btn-delete">Delete</button>
                        </div>
                    )
                })
            }
        </div>

    )
}
export default ShowAllProducts;
