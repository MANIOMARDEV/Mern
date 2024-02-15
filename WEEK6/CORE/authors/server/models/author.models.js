const mongoose = require('mongoose')

const AuthorSchema = mongoose.Schema({

    name: {
        type:String,
        minLength: [3, "Authors name must be more then 3 characters!"]
    }
}, {timeStamp: true})

const Author = mongoose.model('Author', AuthorSchema)

module.exports = Author