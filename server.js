const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const apiRoutes = require("./routes");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", apiRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to MongoDB");
    const server = http.createServer(app);
    server.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
}).catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});