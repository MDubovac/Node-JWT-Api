const express = require("express");
const app = express();
const cors = require("cors");

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/auth", require("./routes/jwtAuth")); // Register 


// Create && Listen to a PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening to port: ${PORT}`));