import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../css/showAllProducts.css';

const ShowAllProducts = (props) => {
    const {products} = props;

    // const handleClick = (product) => {
    //     const id = product._id;
    //     this.nextPath(`/product/${id}`)
    // }

    return (
        <div className="showAllProducts">
            <h2>All Products:</h2>
            {
                products ? 
                    products.map( (product, index) => {
                        return ( 
                            <div className="singleProduct">
                                <p>Title: {product.title}</p>
                                <p>Price: {product.price}</p>
                                <p>Description: {product.description}</p>
                                <button type="button"><a href={`http://localhost:3000/product/${product._id}`}>Details</a></button>
                            </div>
                        )
                    })
                : <p>No products in DB</p>
            }
        </div>

    )
}
export default ShowAllProducts;
