import React, { useState } from "react";

function GuestPage() {
  return (
      <div>
        <h2>✈️ Welcome, Guest!</h2>
        <p>You can browse available flight details here:</p>
        <ul>
          <li>Flight AI202 - Delhi to Mumbai - 10:00 AM</li>
          <li>Flight AI305 - Chennai to Bangalore - 12:45 PM</li>
          <li>Flight AI101 - Hyderabad to Kolkata - 3:30 PM</li>
        </ul>
      </div>
  );
}

function UserPage() {
  return (
      <div>
        <h2>👤 Welcome, User!</h2>
        <p>You can now book tickets:</p>
        <ul>
          <li>Flight AI202 - <button>Book Now</button></li>
          <li>Flight AI305 - <button>Book Now</button></li>
          <li>Flight AI101 - <button>Book Now</button></li>
        </ul>
      </div>
  );
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => setLoggedIn(true);
  const handleLogout = () => setLoggedIn(false);

  return (
      <div className="App" style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>🎟️ Ticket Booking App</h1>

        <div style={{ marginBottom: "20px" }}>
          {loggedIn ? (
              <button onClick={handleLogout}>Logout</button>
          ) : (
              <button onClick={handleLogin}>Login</button>
          )}
        </div>

        {loggedIn ? <UserPage /> : <GuestPage />}
      </div>
  );
}

export default App;
