require("dotenv").config();

const express = require("express");
const connectDB = require("./database");

const orderRoutes = require("./Routes/orderRoutes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Food Ordering API Running");
});

app.use("/api/orders", orderRoutes);

const PORT = process.env.PORT || 3000;

async function startServer() {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(
                `Server running at http://localhost:${PORT}`
            );
        });
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

startServer();