const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/images", express.static("public/images"));

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const userRoutes = require("./routes/userRoutes");
const contactRoutes = require("./routes/contactRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const eventRoutes = require("./routes/eventRoutes");
const eventdetailRoutes = require("./routes/eventdetailRoutes");
const socialeventRoutes = require("./routes/socialeventRoutes");
const viewdetailRoutes = require("./routes/viewdetailRoutes");
const educationRoutes = require("./routes/educationRoutes");
const educationdetailRoutes = require("./routes/educationdetailRoutes");
const informalRoutes = require("./routes/informalRoutes");
const informaldetailRoutes = require("./routes/informaldetailRoutes");
const charityRoutes = require("./routes/charityRoutes");
const charitydetailRoutes = require("./routes/charitydetailRoutes");



app.use("/api/users", userRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/eventdetails", eventdetailRoutes);
app.use("/api/socialevents", socialeventRoutes);
app.use("/api/viewdetails", viewdetailRoutes);
app.use("/api/educationevents", educationRoutes);
app.use("/api/educationdetails", educationdetailRoutes);
app.use("/api/informalevents", informalRoutes);
app.use("/api/informaldetails", informaldetailRoutes);
app.use("/api/charityevents", charityRoutes);
app.use("/api/charitydetails", charitydetailRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
