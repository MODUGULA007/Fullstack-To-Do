require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
const todoRoutes = require("./routes/todoRoutes");
app.use("/api/todos", todoRoutes);

// home route
app.get("/", (req, res) => {
  res.send("API Running...");
});

// DB + Server start
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");

    app.listen(5000, () => {
      console.log("🚀 Server running on port 5000");
    });
  })
  .catch(err => console.log("❌ DB Error:", err));