var router = require('express').Router();
var bodyParser = require('body-parser');
var Item = require('../model/items.js');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.put('/updateitem', function(req, res) {

    Item.findById(req.body._id, function(err, item) {

        item.amount = req.body.amount;
        item.category = req.body.category;
        item.itemName = req.body.itemName;

        item.save(function() {
            console.log(item.itemName, 'has been updated...');
        });
    });

    res.end();
});

module.exports = router;
