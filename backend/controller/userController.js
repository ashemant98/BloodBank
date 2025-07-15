const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");

const signupController = async (req, res) => {
  try {
    const { username, password, hospitalName, ngoName, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      username,
      role,
      password: hashedPassword,
    };
    if (role === "hospital") newUser.hospitalName = hospitalName;
    if (role === "NGO") newUser.ngoName = ngoName;
    const result = await userModel.create(newUser);
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
