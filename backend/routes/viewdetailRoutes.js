const express = require ("express");

const {
  createViewdetails,
  getViewdetails,
  getViewdetailsById,
  deleteViewdetails,
} = require("../controller/viewdetailController");

const router = express.Router();

router.post("/", createViewdetails);
router.get("/", getViewdetails);
router.get("/:id", getViewdetailsById);
router.delete("/:id", deleteViewdetails);

module.exports = router;