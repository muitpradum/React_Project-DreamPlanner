const express = require ("express");

const {
  createInformaldetails,
  getInformaldetails,
//   getViewdetailsById,
//   deleteViewdetails,
} = require("../controller/informaldetailController");

const router = express.Router();

router.post("/", createInformaldetails);
router.get("/", getInformaldetails);
// router.get("/:id", getViewdetailsById);
// router.delete("/:id", deleteViewdetails);

module.exports = router;