import React, { useState } from "react";
import ListofPlayers from "./components/ListofPlayers";
import IndianPlayers from "./components/IndianPlayers";

function App() {
    const [flag, setFlag] = useState(true); // true = ListofPlayers, false = IndianPlayers

    return (
        <div className="App">
            <h1>🏏 Cricket App</h1>

            <button onClick={() => setFlag(!flag)}>
                Show {flag ? "Indian Players" : "List of Players"}
            </button>

            <hr />

            {flag ? <ListofPlayers /> : <IndianPlayers />}
        </div>
    );
}

export default App;
