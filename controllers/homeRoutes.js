const router = require('express').Router();
const {User, List, Book, ListItem} = require('../models');
const withAuth = require('../utils/auth');

//homepage

router.get('/', async(req, res) => {
    try {
        res.render('homepage', {
            logged_in: req.session.logged_in
        }
        )
    } catch {
        res.status(500).json(err)
    }
})

//login page
router.get('/login', (req, res) => {
    if (req.session.logged_in){
        res.redirect('/profile');
        return;
    }
    res.render('login');
})

//profile page

router.get('/profile', withAuth, async (req, res) => {
    try{
        const userData = await User.findByPk(req.session.user_id, {
            include: [List]
        });

        const user = userData.get({plain: true});

        res.render('profile', {
            ...user, 
            logged_in: req.session.logged_in
        })

    } catch(err){

    }
});

//list page

router.get('/list/:id', withAuth, async(req, res) => {
   try{
    const listData = await List.findByPk(req.params.id, {
        include: [{model: Book, through: ListItem}]
    });

    const list = listData.get({plain: true});

    res.render('list', {
        ...list, 
        logged_in: req.session.logged_in
    })
} catch (err){
    res.status(500).json(err);
}
});


//new list page
router.get('/newlist', withAuth, async (req, res) => {
    try {
        res.render('newlist', {
            logged_in: true
        })
    }catch (err){
        res.status(500).json(err);
    }
})


//book data page
router.get('/book/:id', withAuth, async(req, res) => {
    try{
     const bookData = await Book.findByPk(req.params.id, {
        include: [{model: List, through: ListItem}]
     });
 
     const book = bookData.get({plain: true});
 
     res.render('book', {
         ...book, 
         logged_in: req.session.logged_in
     })
 } catch (err){
     res.status(500).json(err);
 }
 });

//Edit list page

router.get('/edit/:id', withAuth, async (req, res) => {
    try{
        const listData = await List.findByPk(req.params.id);

        const list = listData.get({plain: true});

        res.render('edit', {
            list,
            logged_in: req.session.logged_in
        })
    } catch (err){
        res.status(500).json(err);
    }
})


//add book to list
router.get('/addbook/:id', withAuth, async (req, res) => {
    try{
        const listData = await List.findByPk(req.params.id, {
            include:{model: Book}
        });

        const list = listData.get({plain: true});

        res.render('addbook', {
            list,
            logged_in: req.session.logged_in
        })
    } catch (err){
        res.status(500).json(err);
    }
})


module.exports = router;