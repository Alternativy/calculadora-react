import React, { useState, useEffect } from "react";

export const Button = () => {
    const [count, setCount] = useState(0)
    return (<button onClick={() => setCount( count + 1 ) }>{count}</button>)
};

export const Button2 = (props) => {
    const [result, setResult] = useState(0)
    return (<>
                <h2>{result}</h2>
                <button onClick={() => setResult (props.n) }>{props.n}</button>
            </>)
};