const Author = require('../models/author.model');

module.exports.createAuthor = (request, response) => {
    const { name } = request.body;
    Author.create({name})
        .then(res => response.json(res))
        .catch(err => response.status(400).json(err))
}

module.exports.getAllAuthors = (request, response) => {
    Author.find({})
        .then(res => response.json(res))
        .catch(err => response.json(err))
}

module.exports.getSingleAuthor = (request, response) => {
    Author.findOne({_id:request.params.id})
        .then(res => response.json(res))
        .catch(err => response.json(err))
}

module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(res => response.json(res))
        .catch(err => response.status(400).json(err))
}

module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}