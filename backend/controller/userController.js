const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");
const JWT = require("jsonwebtoken");

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
    res.status(200).json({
      success: true,
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

const signInController = async (req, res) => {
  const { username, password, role } = req.body;
  const foundUser = await userModel.findOne({
    username,
    role,
  });

  if (foundUser) {
    const matchPassword = await bcrypt.compare(password, foundUser.password);
    if (matchPassword) {
      const token = JWT.sign(
        {
          id: foundUser._id,
        },
        process.env.JWT_SECRET
      );
      res.json({
        success: true,
        message: "sign in successfull",
        token,
      });
    } else {
      res.status(403).json({
        message: "wrong password",
        success: false,
      });
    }
  } else {
    res.json({
      message: "wrong Email or account not found",
      success: false,
    });
  }
};

module.exports = {
  signupController,
  signInController,
};
