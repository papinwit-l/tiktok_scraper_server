require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const errorMiddleware = require("./middlewares/error");

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// const authRoute = require("./routes/auth-route");
const tiktokRoute = require("./routes/tiktok-route");

app.use("/tiktok", tiktokRoute);

app.get("/", (req, res) => {
  res.send("request received");
});

app.use(errorMiddleware);

if (!process.env.PORT) {
  console.log("PORT is not defined");
}

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
