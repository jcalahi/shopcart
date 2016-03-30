var router = require('express').Router();
var Item = require('../model/items.js');

router.get('/items', function(req, res) {
    if (req.query.q === 'all') {
        Item.find({}, function(err, item) {
            if (err) {
                throw err;
            }
            //res.locals.data = item;
            res.json(item);
        });
    }
});

module.exports = router;
