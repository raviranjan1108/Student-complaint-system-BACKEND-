const express = require("express");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db");

const authRoutes = require("./routes/authRoutes")
const complaintRoutes = require("./routes/complainRoutes");
dotenv.config();

const app = express();

app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes)
app.use("/api/complaints", complaintRoutes)


app.get("/", (req, res) => {
    res.send("Server is running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
