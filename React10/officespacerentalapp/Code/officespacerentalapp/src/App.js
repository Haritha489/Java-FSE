import React from "react";

function App() {
    const heading = <h1>🏢 Office Space Rental Portal</h1>;

    const officeSpaces = [
        {
            name: "SkyView Tower",
            rent: 45000,
            address: "MG Road, Bengaluru",
            image:
                "https://via.placeholder.com/300x150.png?text=SkyView+Tower"
        },
        {
            name: "Green Square",
            rent: 68000,
            address: "Banjara Hills, Hyderabad",
            image:
                "https://via.placeholder.com/300x150.png?text=Green+Square"
        },
        {
            name: "Oceanic Hub",
            rent: 55000,
            address: "Marine Drive, Mumbai",
            image:
                "https://via.placeholder.com/300x150.png?text=Oceanic+Hub"
        }
    ];

    return (
        <div className="App">
            {heading}

            {officeSpaces.map((office, index) => (
                <div
                    key={index}
                    style={{
                        border: "1px solid gray",
                        margin: "20px",
                        padding: "15px",
                        borderRadius: "8px",
                        maxWidth: "320px"
                    }}
                >
                    <img src={office.image} alt={office.name} width="300" />
                    <h2>{office.name}</h2>
                    <p>{office.address}</p>
                    <p
                        style={{
                            color: office.rent < 60000 ? "red" : "green",
                            fontWeight: "bold"
                        }}
                    >
                        ₹{office.rent} / month
                    </p>
                </div>
            ))}
        </div>
    );
}

export default App;
