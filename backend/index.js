const express = require("express");
const connectDB = require("./utils/db");
const cors = require("cors");
const app = express();
require("dotenv").config();
const userRouter = require("../backend/routes/userRouter");
app.use(cors());
app.use(express.json());
connectDB();

const PORT = process.env.PORT || 4000;

app.use("/api/v1/user", userRouter);

app.listen(PORT, () => {
  console.log(`server started succesfully in ${process.env.MODE} port ${PORT}`);
});
