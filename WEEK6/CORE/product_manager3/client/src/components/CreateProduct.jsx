import React, { useState } from "react";
import axios from "axios";

const CreateProduct = (props) => {
    //In product manager 1, this was where we instantiated our state via the useState hook as such: const [productList, setProductList] = useState([]);
    //Because Our state is now lifted, we destructure the keys of the same name as the getter/setter from the props object.
    //Our usage can stay practically identical due to the "same name for key & value" naming convention in Main.js
    const { productList, setProductList } = props;
    //To keep things simple, we will create state for all three fields.
    const [title, setTitle] = useState("");
    //Because our schema has price as a number, it will automatically convert "50" to 50 for example
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        //A form whose button is clicked has a default action which will clear state and refresh the page
        //we prevent that default with the following line:

        axios
            .post("http://localhost:8000/api/products", {
                title, //shorthand for title:title
                price, //NOTE: this only works if the getter name (price) EXACTLY matches the field in your schema
                description,
            })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                //We set state to an array consisting of everything CURRENTLY in state via the spread operator on our getter PLUS whatever our response from our API is
                //Look back to our controller create logic to see where we defined that response (also check console logs)
                setProductList([...productList, res.data]);
                setTitle("");
                setPrice("");
                setDescription("");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <header>Product Manager</header>

            <form onSubmit={submitHandler}>
                <div className="form-fields">
                    <label>Title</label>
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        //We set our value to title here mainly to help us clear out the inputs on submission
                        value={title}
                        name="title"
                        type="text"
                    />
                </div>

                <br />

                <div className="form-fields">
                    <label>Price</label>
                    <input
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        name="price"
                        type="number"
                    />
                </div>

                <br />

                <div className="form-fields">
                    <label>Description</label>
                    <input
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        name="description"
                        type="text"
                    />
                </div>

                <br />
                {/* Could also be a button element. Try it! */}
                <input class="submit-input" type="submit" value="Create" />
            </form>
        </div>
    );
};

export default CreateProduct;