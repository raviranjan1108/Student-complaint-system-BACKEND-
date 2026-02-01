const complainmodel = require("../models/complainModel");


const getMycomplain = async (req, res) => {
    try {
        const userId = req.user.id;
        const complain = await complainmodel.find({ user: userId })
        complain.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

        res.send(complain)


    } catch (err) {
        res.status(500).send({
            success: false,
            message: "error in getmycomplain api",
            err: err.message
        })

    }

}

module.exports = getMycomplain 