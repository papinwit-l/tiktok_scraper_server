const express = require("express");
const authRoute = express.Router();

const authenticate = require("../middlewares/authenticate");
const authController = require("../controllers/auth-controller");

authRoute.post("/login", authController.login);
authRoute.post("/adduser", authController.addUser);
authRoute.get("/current-user", authenticate.auth, authController.currentUser);

module.exports = authRoute;
