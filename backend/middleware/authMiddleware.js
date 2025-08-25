const JWT = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.token;
    const verify = JWT.verify(token, process.env.JWT_SECRET);

    if (verify) {
      req.userId = verify.id;

      next();
    } else {
      console.log("verification failed");
      res.json({
        message: "verification failed",
      });
    }
  } catch (e) {
    console.log(e);
    res.json({
      message: "error in middleware",
      e,
    });
  }
};

module.exports = authMiddleware;
