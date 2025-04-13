// The address of this server connected to the network is:
// URL -> http://localhost:8383
// Ip -> 127.0.0.1:8383
const express = require("express");
const app = express();
const PORT = 8383;

// let data = {
//   name: 'Ritochit Ghosh'
// }

let users = [];

// Middleware: Protectective layer in-between the interaction
app.use(express.json()); // This tells our server to expect json dataas an incoming

// HTTP Verbs & Routes (Paths)
// The method informs the nature of request and the route is a furter subdirectory (basically we direct the request to the body of code to respond appropriately, and these locations or routes are called endpoints)

// Type 1 - Website endpoints (visual endpoints)

app.get("/", (req, res) => {
  // this is endpoint :- /
  // console.log("It is an endpoint", req.method);
  // res.sendStatus(201);

  res.send(`
        <html>
          <head>
            <title>Welcome to HACKAUT</title>
            <style>
              body {
                background-color: #f0f8ff;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                text-align: center;
                padding-top: 100px;
                color: #0077B6;
              }
              h1 {
                font-size: 3rem;
                margin-bottom: 0.5rem;
              }
              p {
                font-size: 1.2rem;
                color: #333;
              }
              a {
                display: inline-block;
                margin-top: 20px;
                font-size: 1rem;
                color: white;
                background: #0077B6;
                padding: 10px 20px;
                border-radius: 10px;
                text-decoration: none;
                transition: 0.3s ease;
              }
              a:hover {
                background: #005f94;
              }
            </style>
          </head>
          <body>
            <h1>🚀 Welcome to the HACKAUT Server</h1>
            <p>Your Node.js server is running successfully!</p>
            <a href="/dashboard">Go to Dashboard</a>
          </body>
        </html>
      `);
});

app.get("/dashboard", (req, res) => {
  console.log("Dashboard endpoint hit.");

  // res.send("Hello, user this is dashboard.")

  res.send(`
    <html>
      <head>
        <title>Dashboard</title>
        <style>
          body {
            background-color: #1a1a2e;
            color: #e0e0e0;
            font-family: 'Courier New', Courier, monospace;
            text-align: center;
            padding: 80px;
          }
          h1 {
            font-size: 3rem;
            margin-bottom: 10px;
            color: #00adb5;
          }
          p {
            font-size: 1.2rem;
          }
          .card {
            background: #222831;
            padding: 20px;
            margin: 30px auto;
            border-radius: 15px;
            box-shadow: 0 0 10px rgba(0,173,181,0.3);
            display: flex;
            flex-direction: column;
            text-align: start;
            width: 440px;
          }
          ul {
            padding-left: 20px;
            color: #fafafa;
          }
          li {
            margin: 5px 0;
          }
          a {
            display: inline-block;
            margin-top: 20px;
            font-size: 1rem;
            color: white;
            background: #0077B6;
            padding: 10px 20px;
            border-radius: 10px;
            text-decoration: none;
            transition: 0.3s ease;
          }
          a:hover {
            background: #005f94;
          }
        </style>
      </head>
      <body>
        <h1>📊 Dashboard</h1>
        <a href="/">Back to Home page</a>
        <p>You're viewing the dashboard area.</p>
        <div class="card">
          <h2>Status: ✅ Online</h2>
          <p>Server running on port: <strong>${PORT}</strong></p>
          <p>IP Address: <strong>127.0.0.1</strong></p>
          <h3>👤 Registered Users:</h3>
          ${
            users.length === 0
              ? "<p>No users registered yet.</p>"
              : `<ol>${users.map((user) => `<li>${user}</li>`).join("")}</ol>`
          }
        </div>
      </body>
    </html>
  `);
});

// Type 2 - API endpoints (non-visual endpoints)
// CRUD - Create-post, Read-get, Update-put, & Delete-delete

// API Endpoint: GET user data
app.get("/api/data", (req, res) => {
  console.log("GET request on /api/data");
  res.status(200).json(users);
});

// API Endpoint: POST new user
app.post("/api/data", (req, res) => {
  const newData = req.body;
  console.log("New Data: ", newData);

  if (!newData.name) {
    return res.status(400).json({ message: "Name is required" });
  }

  users.push(newData.name);
  res.status(201).json({ message: "User added", users });
});

// API Endpoint: DELETE last user
app.delete("/api/data", (req, res) => {
  if (users.length === 0) {
    return res.status(200).json({ message: "No more users to delete..." });
  }

  const deletedUser = users.pop();
  console.log(`User ${deletedUser} got removed...`);
  res.status(200).json({
    message: `User '${deletedUser}' got removed, better luck for future.`,
    remainingUsers: users,
  });
});


app.listen(PORT, () => console.log(`Server has started on: ${PORT}`));
