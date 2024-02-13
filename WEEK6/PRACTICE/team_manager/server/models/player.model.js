const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, "Name is required"],
        minlength: [2, "Name must be at least 2 characters in length."],
    },
    position: {
        type:String
    },
    firstGame:{
        type:Number,
        required: [true, "Game1 is required"],
    },
    secondGame:{
        type:Number,
        required: [true, "Game2 is required"],
    },
    thirdGame:{
        type:Number,
        required: [true, "Game3 is required"],
    }
}, { timestamps:true});
module.exports.Player = mongoose.model('Player', PlayerSchema);