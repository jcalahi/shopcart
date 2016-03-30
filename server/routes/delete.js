var router = require('express').Router();
var Item = require('../model/items.js');

router.delete('/deleteitem', function(req, res) {

    Item.findOneAndRemove({ _id: req.query.id }, function(err, item) {

        if (err) {
            throw err;
        }

        console.log(item.itemName, 'has been deleted from DB...');
    });

    res.end();
});


module.exports = router;
