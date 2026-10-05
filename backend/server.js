const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const userRoutes = require("./routes/userRoutes");
const contactRoutes = require("./routes/contactRoutes");


app.use("/api/users", userRoutes);
app.use("/api/contacts", contactRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
