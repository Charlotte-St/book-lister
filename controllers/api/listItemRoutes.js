const router = require('express').Router();
const {ListItem, Book, List} = require('../../models');

//Get list items

router.get('/', (req, res) => {
    ListItem.findAll().then((listItemData)=> {
        res.json(listItemData)
    })
});

//Post list items

router.post('/', /*withAuth,*/ async (req, res) => {
    try {
        const listItem = await ListItem.create({
            ...req.body,
            user_id: req.session.user_id,
          }
        );
        req.status(200).json(listItem)
    } catch (err) {
        res.status(400).json(err);
    }
});

//Delete list itmes

module.exports = router;