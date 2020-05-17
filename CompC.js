import React from 'react';
const CompC = (props) => {
    return (
        <div>
            <button onClick={props.Random}>Get Started</button>
            <div>Random number : {props.random}</div>
            <div>Result : {props.result}</div>
        </div>
    );
}
export default CompC;