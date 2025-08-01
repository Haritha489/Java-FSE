import React from "react";

const ListofPlayers = () => {
    const players = [
        { name: "Rohit", score: 115 },
        { name: "Virat", score: 88 },
        { name: "Gill", score: 67 },
        { name: "Surya", score: 74 },
        { name: "Hardik", score: 56 },
        { name: "Jadeja", score: 81 },
        { name: "Rahul", score: 66 },
        { name: "Samson", score: 50 },
        { name: "Bumrah", score: 43 },
        { name: "Shami", score: 72 },
        { name: "Kuldeep", score: 39 }
    ];

    // Filter players with score < 70 using arrow function
    const filteredPlayers = players.filter(player => player.score < 70);

    return (
        <div>
            <h2>All Players</h2>
            <ul>
                {players.map((p, i) => (
                    <li key={i}>
                        {p.name} - {p.score}
                    </li>
                ))}
            </ul>

            <h3>Players with score below 70</h3>
            <ul>
                {filteredPlayers.map((p, i) => (
                    <li key={i}>
                        {p.name} - {p.score}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListofPlayers;
