import React from "react";

const StrNum = (props) => {
    const { stringNum } = props;
 
    return (
        <h1>
            { (isNaN(stringNum)) 
                ?
                <h1>The word is: {stringNum}</h1>
                :
                <h1>The number is: {stringNum}</h1>
            }
        </h1>
    );
};

export default StrNum;