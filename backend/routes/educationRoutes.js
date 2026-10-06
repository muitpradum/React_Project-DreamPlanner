const express = require("express");

const {
  createEducationevent,
  getEducationevent,
  getEducationeventById,
  deleteEducationevent,
} = require("../controller/educationController");

const router = express.Router();

router.post("/", createEducationevent);
router.get("/", getEducationevent);
router.get("/:id", getEducationeventById);
router.delete("/:id", deleteEducationevent);

module.exports = router;