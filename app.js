const express = require("express");
const app = express();

const errorMiddleware = require("./middleware/error");
const cors = require("cors");

app.use(cors());
app.use(express.json());


// Route Imports
const insight=require("../Backend/routes/InsightRoutes");
app.use("/api/v1",insight);

module.exports = app;

// Middleware for error
app.use(errorMiddleware);
