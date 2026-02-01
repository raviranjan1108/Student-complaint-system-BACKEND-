const express = require("express");

const router = express.Router()


const { complainbox } = require("../controllers/complainController");
const { authmiddleware } = require("../middleware/jwtmiddleware");
const getMycomplain = require("../controllers/getMycomplain");
const deletecomplain = require("../controllers/deletecomplain");

router.post("/", authmiddleware, complainbox)

router.get("/my", authmiddleware, getMycomplain)


router.delete("/:id", authmiddleware, deletecomplain)

module.exports = router;