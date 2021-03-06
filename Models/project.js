const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    thumbNailPhoto: {
        type: String,
        required: true,
    },
    photos: Array,
});

module.exports = mongoose.model("Project", projectSchema);