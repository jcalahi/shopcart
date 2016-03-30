require('angular').module('shopApp')
    .controller('MainController', require('./main-controller.js'))
    .factory('itemsFactory', require('./items-factory.js'))
    .factory('deleteFactory', require('./delete-factory.js'));
