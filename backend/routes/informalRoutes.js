const express = require("express");

const {
  createInformalevent,
  getInformalevent,
  getInformaleventById,
  deleteInformalevent,
} = require("../controller/informalController");

const router = express.Router();

router.post("/", createInformalevent);
router.get("/", getInformalevent);
router.get("/:id", getInformaleventById);
router.delete("/:id", deleteInformalevent);

module.exports = router;