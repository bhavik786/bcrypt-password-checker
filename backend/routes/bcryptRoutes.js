const express = require("express");
const router = express.Router();
const {
  hashString,
  compareString,
  testApi,
} = require("../controllers/bcryptController");

router.get("/test", testApi);
router.post("/hashString", hashString);
router.post("/compareString", compareString);

module.exports = router;
