const express = require("express");

const {
  createEvent,
  getEvent,
  getEventById,
  deleteEvent,
} = require("../controller/eventController");

const router = express.Router();

router.post("/", createEvent);
router.get("/", getEvent);
router.get("/:id", getEventById);
router.delete("/:id", deleteEvent);

module.exports = router;