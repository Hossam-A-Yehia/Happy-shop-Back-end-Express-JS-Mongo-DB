const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors')
const mongoose = require("mongoose")
// Routes
const auth = require("./routes/auth");
const users = require("./routes/user");
const products = require("./routes/product");
const cart = require("./routes/cart");
const order = require("./routes/order");
const category = require("./routes/categories");
const stripeRoute = require("./routes/stripe")
const Comments = require("./routes/comment")
const complaints = require("./routes/complaint")
// Cors
const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200
}
app.use(cors(corsOptions));
/////////////// 
dotenv.config()
app.use(express.json())
// Mongoose 
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Mongoose DB connect")).catch((err) => console.log(err))
// Routes
app.use("/api/auth", auth)
app.use("/api/users", users)
app.use("/api/products", products)
app.use("/api/cart", cart)
app.use("/api/order", order)
app.use("/api/category", category)
app.use("/api/checkout", stripeRoute);
app.use("/api/comments", Comments);
app.use("/api/complaints", complaints);

app.get("*", (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.send("Hello")
})


const port = process.env.PORT || 5000
app.listen("https://e-commerce-back-end-eight.vercel.app", () => console.log("Server Working"))