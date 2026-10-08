const express = require("express");

const {
  createCharityevent,
  getCharityevent,
  getCharityeventById,
  deleteCharityevent,
} = require("../controller/charityController");

const router = express.Router();

router.post("/", createCharityevent);
router.get("/", getCharityevent);
router.get("/:id", getCharityeventById);
router.delete("/:id", deleteCharityevent);

module.exports = router;