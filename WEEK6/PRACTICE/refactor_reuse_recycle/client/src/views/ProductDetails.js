import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import DeleteButton from '../components/DeleteButton';
import ProductForm from '../components/ProductForm'

const ProductDetails = (props) => {
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);
    const link = `http://localhost:8000/api/product/${props.id}`;

    useEffect(() => {
        axios.get(link)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
    }, [])

    const updateProduct = (e) => {
        product.title = e.title;
        product.price = e.price;
        product.description = e.description;
        axios.put(link, product)
            .then(navigate("/"));
    }

    return (
        <div>
            <h1>Update a Product</h1>
            { loaded && (
                <>
                    <ProductForm
                        onSubmit={updateProduct}
                        initTitle={product.title}
                        initPrice={product.price}
                        initDescription={product.description}
                    />
                    <DeleteButton productId={props.id} successCallback={() => navigate("/")}/>
                </>
            )}
        </div>
    )
}
export default ProductDetails;
