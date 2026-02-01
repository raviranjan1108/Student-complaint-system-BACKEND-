const complainModel = require("../models/complainModel");

const complainbox = async (req, res) => {
    try {
        const {description } = req.body;
        if (!description) {
            return res.status(400).send({
                success: false,
                message: "Please provide description"
            })
        }

        const newComplain = new complainModel({
            user: req.user.id,
            description
        })

        await newComplain.save();

        res.status(201).send({
            success: true,
            message: "your complaint is successfully registered"
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({
            success: false,
            message: "Error in complainBox api"
        })
    }


}

module.exports = { complainbox }