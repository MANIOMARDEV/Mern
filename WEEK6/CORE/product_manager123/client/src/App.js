import "./App.css";
//We cannot display two components at the same path so we import a view component that contains the two components we wish to display together
import Main from "./view/Main";
import OneProduct from "./components/OneProduct";
import UpdateProduct from "./components/UpdateProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                {/* Everything inside of our Routes component needs a path */}
                <Routes>
                    {/* Now both components can display from the same path */}
                    <Route path="/" element={<Main />} />
                    {/* :id is a variable added to our path that needs a unique value. We can access and destructure it from the useParams hook */}
                    <Route path="/product/:id" element={<OneProduct />}  />
                    <Route path="/product/edit/:id" element={<UpdateProduct />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;