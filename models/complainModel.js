const mongoose = require("mongoose")

const complainSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    description: {
        type: String,
        required: true
    }

}, { timestamps: true })

module.exports = mongoose.model("Complain", complainSchema)