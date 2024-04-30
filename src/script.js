const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/user");

const app = express();
const port = process.env.PORT || 3004;

// Middleware
app.use(express.json());
app.use('/api', userRoutes);

// Rutas
app.get("/", (req, res) => {
    res.send("Welcome to the video");
})

// mongoose conexion
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log("Conexion a MongoDB Atlas"))
.catch((error) => console.error(error));

app.listen(port, () => console.log("El servidor abrio en el puerto", port));