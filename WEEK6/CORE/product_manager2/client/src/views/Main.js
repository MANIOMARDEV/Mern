import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ShowAllProducts from '../components/ShowAllProducts';
import axios from 'axios';

import '../css/main.css'

const Main = () => {
    const [products, setProducts] = useState([])
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
            .then(res=>{
                console.log(res.data);
                setProducts(res.data);
                setLoaded(true);
            });
    }, [])

    return (
        <div className="App">
            
            <h1>Product Manager</h1>
            <ProductForm className="productForm"/>
            <hr/>
            { loaded && <ShowAllProducts products={products}/>}
        </div>
    )
}
export default Main;
