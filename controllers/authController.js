// register controller
const bcrypt = require("bcrypt")
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");


const registercontroller = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).send({
                success: false,
                message: "provide all details"
            })
        }

        const userexisting = await userModel.findOne({ email });
        if (userexisting) {
            return res.status(400).send({
                success: false,
                message: "user already exist"
            })
        }


        const hashpass = await bcrypt.hash(password, 10);

        await userModel.create({
            username,
            email,
            password: hashpass

        })
        res.status(201).send({
            success: true,
            message: "register successfully"
        })


    } catch (err) {
        res.status(500).send({
            success: false,
            message: "error in register api"
        })
    }

}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//login controller


const usercontroll = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).send({
                success: false,
                message: "provide email and password"
            })
        }

        const checkuseravailable = await userModel.findOne({ email })
        if (!checkuseravailable) {
            return res.status(400).send({
                success: false,
                message: "user not registered"
            })
        }

        const isMatch = await bcrypt.compare(password, checkuseravailable.password);
        if (!isMatch) {
            return res.status(400).send({
                success: false,
                message: "invalid password"
            })
        }
        //jwt token
        const token = jwt.sign(
            { id: checkuseravailable._id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.status(200).send({
            success: true,
            message: "Login successful",
            token
        })

    } catch (err) {
        console.log(err)
        res.status(500).send({
            success: false,
            message: "error in user api",
            err: err.message
        })
    }

}
module.exports = { usercontroll, registercontroller }