var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
    addedAt: Date,
    amount: Number,
    category: String,
    itemName: { type: String, unique: true },
    updatedAt: Date
});

itemSchema.pre('save', function(next) {

    !this.addedAt ? this.addedAt = new Date() : this.updatedAt = new Date();
    next();
});

var Item = mongoose.model('Item', itemSchema);

module.exports = Item;
