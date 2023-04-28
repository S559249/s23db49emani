const mongoose = require("mongoose")
const icecreamSchema = mongoose.Schema({
name: String,
flavour: String,
parts: {
    type: Number,
    min: 0,
    max: 10
}
})
module.exports = mongoose.model("Icecream",
icecreamSchema)