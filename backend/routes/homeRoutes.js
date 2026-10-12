const express = require ("express");

const {
  createHomeevent,
  getHomeevent,
  getHomeeventById,
  deleteHomeevent,
} = require("../controller/homeControler");

const router = express.Router();

router.post("/", createHomeevent);
router.get("/", getHomeevent);
router.get("/:id", getHomeeventById);
router.delete("/:id", deleteHomeevent);

module.exports = router;