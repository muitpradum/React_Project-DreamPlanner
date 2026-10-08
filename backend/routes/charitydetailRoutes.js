const express = require("express");

const {
  createCharitydetails,
  getCharitydetails,
//   getCharityeventById,
//   deleteCharityevent,
} = require("../controller/charitydetailController");

const router = express.Router();

router.post("/", createCharitydetails);
router.get("/", getCharitydetails);
// router.get("/:id", getCharityeventById);
// router.delete("/:id", deleteCharityevent);

module.exports = router;