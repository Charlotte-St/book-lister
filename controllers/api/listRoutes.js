const router = require('express').Router();
const {List, ListItem, Book} = require('../../models');
//const withAuth = require('../utils/auth');


//Get route for fetching all lists

router.get('/', (req, res) => {
    List.findAll().then((listData)=> {
        res.json(listData)
    })
})

//Post route for adding lists

router.post('/', /*withAuth,*/ async (req, res) => {
    try {
        const list = await List.create({
            ...req.body,
            user_id: req.session.user_id,
            userID: req.session.user_id
          }
        );
        req.status(200).json(list)
    } catch (err) {
        res.status(400).json(err);
    }
});

//Put route for updating lists

router.put('/edit/:id', /*withAuth,*/ async (req, res) => {
  try {
      const list = await List.update({
          title: req.body.title,
          list_desc: req.body.list_desc},
          {where: {
            id: req.params.id,
            user_id: req.session.user_id
          }}
      );
      req.status(200).json(list)
  } catch (err) {
      res.status(400).json(err);
  }
});


//Get list data by ID

router.get('/:id', async (req, res) => {
    try {
      const listData = await List.findByPk(req.params.id, {
        include: [{model: Book, through: ListItem}]
      });
  
      if (!listData) {
        res.status(404).json({ message: 'No list found with that id.' });
        return;
      }
  
      res.status(200).json(listData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //Delete route for lists

  router.delete('/:id', /*withAuth,*/ async (req, res) => {
    try {
      const postData = await List.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!postData) {
        res.status(404).json({ message: 'Unable to delete this list.' });
        return;
      }
  
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;