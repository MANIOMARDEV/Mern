import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const [resource, setResource] = useState("");
    const [id, setId] = useState("");
    const navigate = useNavigate();

    const handleForm = (e) => {
        e.preventDefault();
        navigate(`/${resource}/${id}`);
    };

    return (
        <div>home
            <form onSubmit={handleForm}>
                Search for:
                <select onChange={(e) => setResource(e.target.value)}>
                    <option value="planets">planets</option>
                    {/* <option value="spaceships">spaceships</option> */}
                    {/* <option value="vehicles">vehicles</option> */}
                    <option value="people">people</option>
                    {/* <option value="films">films</option> */}
                    {/* <option value="species">species</option> */}
                </select>
                {/* read as a string even though it's a num    */}
                ID:
                <input type="text" onChange={(e) => setId(e.target.value)} />
                <button type="submit"> Search</button>
            </form>
        </div>
    );

};
export default Home;