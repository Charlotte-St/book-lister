const router = require('express').Router();
const {List} = require('../../models');
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
          }
        );
        req.status(200).json(list)
    } catch (err) {
        res.status(400).json(err);
    }
});

//Get list data by ID

router.get('/:id', async (req, res) => {
    try {
      const listData = await List.findByPk(req.params.id);
  
      if (!listData) {
        res.status(404).json({ message: 'No list found with that id.' });
        return;
      }
  
      res.status(200).json(listData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;