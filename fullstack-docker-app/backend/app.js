const express = require("express");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();

// Setup Postgres connection pool
const pool = new Pool({
  host: process.env.DB_HOST || "db",
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  database: process.env.DB_NAME || "postgres",
  port: process.env.DB_PORT || 5432,
});

// Test DB connection
pool.connect()
  .then(() => console.log("✅ Connected to Postgres"))
  .catch((err) => console.error("❌ DB connection error:", err));

// API route
app.get("/api", (req, res) => {
  res.send("Hello from Backend + Postgres 🚀");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});
