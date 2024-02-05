import React from 'react';
import Main from './views/Main';
import AuthorForm from './components/AuthorForm'
import AuthorDetails from './views/AuthorDetails';
import { Router } from '@reach/router';

function App() {
    return (
        <div className="App">
            <h1>Favorite Authors</h1>
            <Router>
                <Main path="/" default/>
                <AuthorForm path={"/authors/add"}/>
                <AuthorDetails path={"/authors/edit/:id"}/>
            </Router>
        </div>
    );
}
export default App;
