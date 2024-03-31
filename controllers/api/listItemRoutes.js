const router = require('express').Router();
const {ListItem, Book, List} = require('../../models');
const withAuth = require('../../utils/auth');

//Get list items

router.get('/', (req, res) => {
    ListItem.findAll().then((listItemData)=> {
        res.json(listItemData)
    })
});

//Post list items

router.post('/', withAuth, async (req, res) => {
    try {
        const listItem = await ListItem.create({
            ...req.body,
            //user_id: req.session.user_id,
          }
        );
        res.status(200).json(listItem)
    } catch (err) {
        res.status(400).json(err);
    }
});

//Delete list itmes

router.delete('/:id', withAuth, async (req, res) => {
    try {
      const listItemData = await ListItem.destroy({
        where: {
          id: req.params.id
        },
      });
  
      if (!listItemData) {
        res.status(404).json({ message: 'Unable to remove this book.' });
        return;
      }
  
      res.status(200).json(listItemData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;