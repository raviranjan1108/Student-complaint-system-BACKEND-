const complainModel = require("../models/complainModel")

const deletecomplain = async (req, res) => {

    try {
        const complainId = req.params.id;
        const userId = req.user.id;

        const deletethecomplain = await complainModel.findOneAndDelete({
            _id: complainId,
            user: userId
        })


        if (!deletethecomplain) {
            return res.status(400).send({
                success: false,
                message: "Complaint not found or not yours"
            })
        }

        res.status(200).send({
            success: true,
            message: "Complaint deleted successfully"
        })
    }
    catch (err) {
        res.status(500).send({
            success: false,
            message: "Error deleting complaint"

        })
    }




}

module.exports = deletecomplain