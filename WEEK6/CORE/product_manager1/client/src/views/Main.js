import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';

import '../css/main.css'
import '../css/productform.css'

const Main = () => {
    return (
        <div className="App">
            
            <h1>Product Manager</h1>
            <ProductForm className="productForm"/>
        </div>
    )
}
export default Main;
