const express = require ("express");

const {
  createHomedetail,
  getHomedetail,
  getHomedetailById,
  deleteHomedetail,
} = require("../controller/homedetailController");

const router = express.Router();

router.post("/", createHomedetail);
router.get("/", getHomedetail);
router.get("/:id", getHomedetailById);
router.delete("/:id", deleteHomedetail);

module.exports = router;