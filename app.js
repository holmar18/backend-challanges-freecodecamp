const express = require("express");
const useRoutes = require("./src/routes/timeStampRoutes");
const app = express();

// Middleware setup to parse incoming requests with JSON payloads
app.use(express.json());

// Routes setup, mounting under /api
app.use("/api", useRoutes);

// Error handling middleware for handling any runtime errors
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack to the console
  res.status(500).send("Something went wrong"); // Send a generic error message with a 500 Internal Server Error status
});

const PORT = process.env.PORT || 3000;

// Check if the server is running on localhost and update the server URL accordingly
const serverURL =
  process.env.NODE_ENV === "production" ? "" : `http://localhost:${PORT}`;

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running at ${serverURL}`); // Log the server URL including localhost if applicable
});

module.exports = app;
