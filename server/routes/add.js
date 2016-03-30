var router = require('express').Router();
var bodyParser = require('body-parser');
var Item = require('../model/items.js');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post('/additem', function(req, res) {

    new Item({
        amount: req.body.amount,
        category: req.body.category,
        itemName: req.body.itemName
    }).save(function() {

        console.log(req.body.itemName, 'has been added in DB...');
        res.end();
    });
});

module.exports = router;
