const express = require("express");

const {
  createBookings,
  getBookings,
  getBookingsById,
  deleteBookings,
} = require("../controller/bookingController");

const router = express.Router();

router.post("/", createBookings);
router.get("/", getBookings);
router.get("/:id", getBookingsById);
router.delete("/:id", deleteBookings);

module.exports = router;