const express = require ("express");

const {
  createEventdetails,
  getEventdetails,
  getEventdetailsById,
  deleteEventdetails,
} = require("../controller/eventdetailController");

const router = express.Router();

router.post("/", createEventdetails);
router.get("/", getEventdetails);
router.get("/:id", getEventdetailsById);
router.delete("/:id", deleteEventdetails);

module.exports = router;