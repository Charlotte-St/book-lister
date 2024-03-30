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
        res.status(200).json(book)
    } catch (err) {
        res.status(400).json(err);
    }
});

//Get book data by ID

router.get('/:id', async (req, res) => {
    try {
      const bookData = await Book.findByPk(req.params.id);
  
      if (!bookData) {
        res.status(404).json({ message: 'No book found with that id.' });
        return;
      }
  
      res.status(200).json(bookData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;