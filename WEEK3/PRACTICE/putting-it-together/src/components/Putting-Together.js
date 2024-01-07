import React from 'react';
import { useState } from 'react';

const Person = (props) => {
    const [age, setAge] = useState(props.age);

    return (
        <div>
            <h1>
                {props.lastName}, {props.firstName}
            </h1>
            <h4>
                Age: {age}
            </h4>
            <h4>
                Hair Color: {props.hairColor}
            </h4>
            <p>
                <button onClick = { () => setAge( age + 1)}>Plus 1 to Age</button>
            </p>
        </div>
    )
}

export default Person;