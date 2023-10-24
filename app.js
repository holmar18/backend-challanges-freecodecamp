const express = require("express");
const useRoutes = require("./src/routes/timeStampRoutes");
const app = express();

// Middleware setup
app.use(express.json());

// Routes setup, mounting undir /api
app.use("/api", useRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
