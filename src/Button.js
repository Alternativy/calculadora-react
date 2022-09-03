import React, { useState } from "react";

export const Button = () => {
    const [count, setCount] = useState(0)
    const [operator, setOperator] = useState("+")
    let resolve = () => count.split("+")
    let substract = () => count.split("-")
    let divide = () => count.split("/")
    let multiply = () => count.split("*")
    let op = () => count
    let resolve2 = (n1,n2) => {
        switch (op) {
            case "+":
                return n1+n2;
            case "-":
                return n1-n2;
            case "/":
                return n1/n2;
            case "*":
                return n1*n2; 
            default:
                return "no operator asigned";
        }
    }

    return (
    <>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + "0")}>0</button>
        <button onClick={() => setCount(count + "1")}>1</button>
        <button onClick={() => setCount(count + "2")}>2</button>
        <button onClick={() => setCount(count + "3")}>3</button>
        <button onClick={() => setCount(count + "4")}>4</button>
        <button onClick={() => setCount(count + "5")}>5</button>
        <button onClick={() => setCount(count + "6")}>6</button>
        <button onClick={() => setCount(count + "7")}>7</button>
        <button onClick={() => setCount(count + "8")}>8</button>
        <button onClick={() => setCount(count + "9")}>9</button>
        <button onClick={() => setCount(count + "+")}>+</button>
        <button onClick={() => setCount(count + "-")}>-</button>
        <button onClick={() => setCount(count + "*")}>*</button>
        <button onClick={() => setCount(count + "/")}>/</button>
        <button onClick={() => setCount(parseInt(resolve()[0]) + parseInt(resolve()[1]))}>sum</button>
        <button onClick={() => setCount(parseInt(substract()[0]) - parseInt(substract()[1]))}>substract</button>
        <button onClick={() => setCount(parseInt(divide()[0]) / parseInt(divide()[1]))}>divide</button>
        <button onClick={() => setCount(parseInt(multiply()[0]) * parseInt(multiply()[1]))}>multiply</button>
        <button onClick={() => setCount(resolve2(parseInt(resolve()[0]),parseInt(resolve()[1])))}
            >resolve</button>
        <button onClick={() => setCount(0)}>clear</button>
    </>)

};

export const Button2 = (props) => {
    const [result, setResult] = useState(0)
    return (<>
                <h2>{result}</h2>
                <button onClick={() => setResult (props.n) }>{props.n}</button>
            </>)
};