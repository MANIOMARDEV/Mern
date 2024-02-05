import React from 'react';
import Main from './views/Main';
import ProductDetails from './views/ProductDetails';
import { Router } from '@reach/router';

function App() {
    return (
        <div className="App">
            <Router>
                <Main path="/" default/>
                <ProductDetails path={"/product/:id"}/>
            </Router>
        </div>
    );
}
export default App;
