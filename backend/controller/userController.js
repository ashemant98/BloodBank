const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");



const signupController = async (req, res) => {
  try {
    const { role, username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await userModel.create({
      role,
      username,
      password: hashedPassword,
    });

    res.json({
      message: "account created successfully",
      result,
    });
  } catch (e) {
    console.log(e);
    res.json({
      message: "error in signup controller",
      e,
    });
  }
};

module.exports = {
  signupController,
};
