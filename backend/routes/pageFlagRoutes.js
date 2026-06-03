const express = require("express");
const router = express.Router();

const {
  createFlag,
  getFlags,
  getFlagById,
  updateFlag,
  deleteFlag,
  getStats,
} = require("../controllers/pageFlagController");
router.get("/stats", getStats);
router.get("/", getFlags);
router.get("/:id", getFlagById);
router.post("/", createFlag);
router.put("/:id", updateFlag);

router.delete("/:id", deleteFlag);
module.exports = router;
