const express = require("express");
const {
  signupController,
  signInController,
} = require("../controller/userController");
const app = express();

const router = express.Router();

router.post("/signup", signupController);
router.post("/signin", signInController);
module.exports = router;
