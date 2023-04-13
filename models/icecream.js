const mongoose = require("mongoose")
const icecreamSchema = mongoose.Schema({
name: String,
flavour: String,
parts: Number
})
module.exports = mongoose.model("Icecream",
icecreamSchema)