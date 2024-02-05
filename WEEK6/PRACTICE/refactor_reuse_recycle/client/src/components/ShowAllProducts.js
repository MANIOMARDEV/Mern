import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';

import '../css/showAllProducts.css';

const ShowAllProducts = (props) => {
    const [ products, setProducts ] = useState([]);

    const removeFromDom = productID => {
        setProducts(products.filter(product => product._id !== productID))
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res => setProducts(res.data));
    }, [products])

    return (
        <div className="showAllProducts">
            <h2>All Products:</h2>
            {
                products.map( (product, index) => {
                    return ( 
                        <div className="singleProduct" key={index}>
                            <span></span>
                            <p className="product-title">{product.title}</p>
                            <p className="product-price">${product.price}</p>
                            
                            <p className="product-desc">{product.description}</p>
                            <Link to={"/product/" + product._id}>
                                <button className="btn-edit">Edit</button>
                            </Link>
                            <DeleteButton 
                                productId={product._id} 
                                successCallback={()=>removeFromDom(product._id)}
                            />
                        </div>
                    )
                })
            }
        </div>

    )
}
export default ShowAllProducts;
