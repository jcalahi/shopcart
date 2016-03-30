require('angular').module('shopApp')
    .controller('AddItemController', require('./add-item-controller.js'))
    .factory('addItemFactory', require('./add-item-factory.js'));
