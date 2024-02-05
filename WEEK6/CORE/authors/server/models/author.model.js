const mongoose = require('mongoose');

function validateAuthorName(value) {
    if (value.length < 3){
        return false;
    } else {
        return true;
    }
}

const AuthorScheme = new mongoose.Schema({
    name: { 
        type: String,
        required: [true,"Must include a name"],
        validate: {
            validator: validateAuthorName,
            message: "Author name must be longer than 3 characters"
        }
    },
}, { timestamps: true });
module.exports = mongoose.model('Author', AuthorScheme);
