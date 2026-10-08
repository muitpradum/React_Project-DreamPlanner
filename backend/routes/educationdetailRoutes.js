const express = require ("express");

const {
  createEducationdetails,
  getEducationdetails,
//   getViewdetailsById,
//   deleteViewdetails,
} = require("../controller/educationdetailController");

const router = express.Router();

router.post("/", createEducationdetails);
router.get("/", getEducationdetails);
// router.get("/:id", getViewdetailsById);
// router.delete("/:id", deleteViewdetails);

module.exports = router;