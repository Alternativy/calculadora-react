import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import { Button, Button2 } from "./Button"
 
let number = 0 
const sum = (n) => number + n;
const minus = (n) => number 
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <>
        <Button />
        {/* <h1>tucson calculator</h1>
        <input type="number/text" value={number}></input>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>0</button>
        <button>=</button>
        <button>+</button>
        <button>*</button>
        <button>-</button>
        <button>/</button> */}
    </>
);