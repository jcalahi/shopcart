var express = require('express');
var mongoose = require('mongoose');
var app = express(); // jshint ignore:line
var PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://127.0.0.1:27017/shoppingcart');

// GET method
app.use('/myapplication', require('./server/routes/items'));
// POST method
app.use('/myapplication', require('./server/routes/add'));
// DELETE method
app.use('/myapplication', require('./server/routes/delete'));
// PUT method
app.use('/myapplication', require('./server/routes/update'));

app.use('/myapplication', express.static('public'));

app.listen(PORT, function() {
    console.log('Server has started...');
});
