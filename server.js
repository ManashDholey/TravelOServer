const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const hotelDataAddedToDBRouter = require("./routes/dataimport.router");
const categoryDataAddedToDBRouter = require("./routes/categoryimport.router");

const hotelRouter = require("./routes/hotel.router");
const categoryRouter = require("./routes/category.router");
const singleHoterRouter = require("./routes/singlehotel.router");
const authRouter = require("./routes/auth.router");
const wishlistRouter = require("./routes/wishlist.router");

const connectDB = require("./config/dbconfig");

const app = express();

app.use(cors({ origin: 'http://localhost:5174' }));
app.use(express.json());
connectDB();

const PORT = process.env.PORT || 3500;

app.get("/", (req, res) => {
  res.send("Hello Geeks");
});

app.use("/api/hoteldata", hotelDataAddedToDBRouter);
app.use("/api/categorydata", categoryDataAddedToDBRouter);
app.use("/api/hotels", hotelRouter);
app.use("/api/category", categoryRouter);
app.use("/api/hotels", singleHoterRouter);
app.use("/api/auth", authRouter);
app.use("/api/wishlist", wishlistRouter);

mongoose.connection.once("open", () => {
  console.log("Connected to DB");
  app.listen( PORT, () => {
    console.log(`PORT is ${PORT}`);
    console.log(`Server is Up and Running:  http://localhost:${PORT}`);
  });
});