const express = require("express");

const {
  createSocialevent,
  getSocialevent,
  getSocialeventById,
  deleteSocialevent,
} = require("../controller/socialeventController");

const router = express.Router();

router.post("/", createSocialevent);
router.get("/", getSocialevent);
router.get("/:id", getSocialeventById);
router.delete("/:id", deleteSocialevent);

module.exports = router;