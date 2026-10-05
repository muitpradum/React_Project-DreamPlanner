const express = require("express");

const {
  createContact,
  getMessages,
//   getMessageById,
//   deleteMessage,
} = require("../controller/contactController");

const router = express.Router();

router.post("/", createContact);
router.get("/", getMessages);
// router.get("/:id", getMessageById);
// router.delete("/:id", deleteMessage);

module.exports = router;