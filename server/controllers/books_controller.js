module.exports = {
    getAllBooks: function(req, res, next) {
        const dbInstance = req.app.get('db')

        dbInstance.get_books().then((books) => res.status(200).send(books))
        .catch(() => res.status(500).send())
    },
    getBook: function (req, res, next) {
        const dbInstance = req.app.get('db')

        dbInstance.get_book([req.params.book_id])
        .then((book) => res.status(200).send(book))
        .catch(()=> res.status(500).send())
    },
    editBook: function(req, res, next) {
        const dbInstance = req.app.get('db')

        dbInstance.edit_book([req.body.title, req.body.author, req.body.book_description, req.body.genre, req.body.image_url, req.params.book_id, req.body.inventory, req.body.user_id])
        .then((book) => {
            req.book = book[0]
            res.status(200).send(book[0])
        })
        .catch(() => {
            console.log(res)
            res.status(500).send()

        });
    },
    addBook: function(req, res, next) {
        const dbInstance = req.app.get('db')

        dbInstance.add_book([req.body.title, req.body.author, req.body.book_description, req.body.genre, req.body.image_url, req.body.user_id])
        .then((book) => res.status(200).send(book))
        .catch(() => res.status(500).send());
    },
    addToShelf: function(req, res, next) {
        const dbInstance = req.app.get('db')

        dbInstance.add_to_shelf([req.body.user_id, req.body.book_id])
        .then((books) => res.status(200).send(books))
        .catch(() => res.status(500).send())
    },
    removeFromShelf: function(req, res, next) {
        const dbInstance = req.app.get('db')

        dbInstance.remove_from_shelf([req.body.user_id, req.body.book_id])
        .then(res.status(200).send())
        .catch(() => res.status(500).send())
    },
    getShelf: function(req, res, next) {
        const dbInstance = req.app.get('db')

        dbInstance.get_shelf([req.body.user_id])
        .then((books) => res.status(200).send(books))
        .catch(() => res.status(500).send())
    }
}

//test change