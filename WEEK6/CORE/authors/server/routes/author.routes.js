const AuthorController = require('../controllers/author.controllers')

module.exports = (app) => {
    
    app.post('/api/addAuthor', AuthorController.addAuthor)
    
    app.get('/api/getAllAuthors', AuthorController.getAllAuthors)

    app.get('/api/oneAuthor/:id', AuthorController.showAuthor)

    app.put('/api/editAuthor/:id', AuthorController.editAuthor)

    app.delete('/api/deleteAuthor/:id', AuthorController.deleteAuthor)

}