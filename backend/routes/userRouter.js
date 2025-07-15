const express = require("express");
const { signupController } = require("../controller/userController");
const app = express();

const router = express.Router();

router.post("/signup", signupController);

module.exports = router;
