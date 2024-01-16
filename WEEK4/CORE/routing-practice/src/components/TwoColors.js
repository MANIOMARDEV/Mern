import React from "react";

const TwoColors = (props) => {
    const {word, clr1, clr2} = props;
    console.log(word);
    console.log(clr1);
    console.log(clr2);

    const style={
        color: clr1,
        background: clr2
    }

    return (
        <h1>
            <span style={style}>The word is: {word}</span>
        </h1>
    );
};

export default TwoColors;