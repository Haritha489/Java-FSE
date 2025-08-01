import React from "react";

const IndianPlayers = () => {
    const T20Players = ["Rohit", "Surya", "Hardik", "Gill"];
    const RanjiPlayers = ["Pujara", "Rahane", "Saha"];

    // Merge arrays using spread operator
    const allPlayers = [...T20Players, ...RanjiPlayers];

    // Separate into even and odd team using index
    const evenTeam = allPlayers.filter((_, i) => i % 2 === 0);
    const oddTeam = allPlayers.filter((_, i) => i % 2 !== 0);

    return (
        <div>
            <h2>All Merged Players</h2>
            <ul>
                {allPlayers.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>

            <h3>Even Team Players</h3>
            <ul>
                {evenTeam.map((p, i) => (
                    <li key={i}>{p}</li>
                ))}
            </ul>

            <h3>Odd Team Players</h3>
            <ul>
                {oddTeam.map((p, i) => (
                    <li key={i}>{p}</li>
                ))}
            </ul>
        </div>
    );
};

export default IndianPlayers;
