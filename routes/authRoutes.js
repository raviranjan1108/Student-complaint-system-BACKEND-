const express = require("express")
const routes = express.Router();

const { usercontroll, registercontroller } = require("../controllers/authController")


//register routes
routes.post("/register", registercontroller)

//login routes
routes.post("/login", usercontroll)

module.exports = routes