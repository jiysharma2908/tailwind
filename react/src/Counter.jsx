import { useState } from "react";

// let counter = 0;

function Counter(){
    const [counter, setCounter] = useState(0);
    function increment(){
        if(counter < 10)
    setCounter(counter + 1);
     }
    function decrement(){
        if(counter > 0)
        setCounter(counter - 1);
    }
return (
    <>
    <h2>Counter</h2>
    <button onClick={increment}>Increment</button>
    <p>{counter}</p>
    <button onClick={decrement}>Decrement</button>
    </>


)};
export default Counter