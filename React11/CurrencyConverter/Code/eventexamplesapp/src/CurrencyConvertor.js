import React, { useState } from "react";

const CurrencyConvertor = () => {
    const [rupees, setRupees] = useState("");
    const [euros, setEuros] = useState(null);

    const handleSubmit = () => {
        const converted = parseFloat(rupees) / 90;
        setEuros(converted.toFixed(2));
    };

    return (
        <div style={{ marginTop: "40px" }}>
            <h2>💱 Currency Convertor</h2>
            <input
                type="number"
                value={rupees}
                onChange={(e) => setRupees(e.target.value)}
                placeholder="Enter amount in INR"
            />
            <button onClick={handleSubmit} style={{ marginLeft: "10px" }}>
                Convert
            </button>

            {euros !== null && (
                <p style={{ marginTop: "10px" }}>
                    💶 {rupees} INR = {euros} Euros
                </p>
            )}
        </div>
    );
};

export default CurrencyConvertor;
