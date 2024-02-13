const { request, response } = require('express');
const { Player } = require('../models/player.model');

module.exports.createPlayer = (request, response) => {
    request.body.firstGame = 0;
    request.body.secondGame = 0;
    request.body.thirdGame = 0;
    Player.create(request.body)
        .then(player => response.json(player))
        .catch(err => response.status(400).json(err))
}

module.exports.getAllPlayers = (request, response) => {
    Player.find({})
        .then(players => response.json(players))
        .catch(err => response.status(400).json(err))
}

module.exports.getPlayer = (request, response) => {
    Player.findById(request.params.id)
        .then(player => response.json(player))
        .catch(err => response.status(404).json(err))
}

module.exports.updatePlayer = (request, response) => {
    Player.findByIdAndUpdate(request.params.id, request.body, { new: true, runValidators: true })
        .then(updatedPlayer => response.json(updatedPlayer))
        .catch(err => response.status(400).json(err))
}

module.exports.deletePlayer = (request, response) => {
    Player.findByIdAndRemove(request.params.id)
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.status(404).json(err))
}
