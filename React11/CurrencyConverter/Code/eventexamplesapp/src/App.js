import React, { useState } from "react";
import CurrencyConvertor from "./CurrencyConvertor";

function App() {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("");

    const increment = () => {
        setCount(count + 1);
        sayHello();
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const sayHello = () => {
        console.log("Hello from React!");
        setMessage("Hello! Counter increased.");
    };

    const sayWelcome = (msg) => {
        setMessage(`Welcome! Message: ${msg}`);
    };

    const handleClick = (event) => {
        setMessage("I was clicked");
        console.log("Synthetic Event:", event);
    };

    return (
        <div className="App" style={{ padding: "20px", fontFamily: "Arial" }}>
            <h1>🎯 React Event Handling Example</h1>

            <h2>Counter: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement} style={{ marginLeft: "10px" }}>
                Decrement
            </button>

            <div style={{ marginTop: "20px" }}>
                <button onClick={() => sayWelcome("Welcome")}>Say Welcome</button>
            </div>

            <div style={{ marginTop: "20px" }}>
                <button onClick={handleClick}>Synthetic Event - OnPress</button>
            </div>

            <p style={{ marginTop: "20px", fontWeight: "bold" }}>{message}</p>

            <hr />

            <CurrencyConvertor />
        </div>
    );
}

export default App;
