const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    username : {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },

});

module.exports = mongoose.model("Comments", commentSchema);