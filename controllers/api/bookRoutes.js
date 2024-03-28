const router = require('express').Router();
const {Book} = require('../../models');

//Get route for fetching all books

router.get('/', (req, res) => {
    Book.findAll().then((bookData)=> {
        res.json(bookData)
    })
})

//Post route for adding books (DEV only)

router.post('/', async (req, res) => {
    try {
        const book = await Book.create({
            ...req.body
        });
        req.status(200).json(book)
    } catch (err) {
        res.status(400).json(err);
    }
});

//Get book data by ID

module.exports = router;