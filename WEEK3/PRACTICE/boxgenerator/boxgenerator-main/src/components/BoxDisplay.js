import React, { useState } from 'react';

const BoxDisplay = props => {
    const {color, height, width} = props;

    return <div className="p-2 d-inline-block">
            <div style={{backgroundColor:color, height:height, width:width}} />
            <div style={{backgroundColor:color, height:height + "px", width:width + "px"}} />
            </div>
}

export default BoxDisplay;