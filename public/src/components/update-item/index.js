require('angular').module('shopApp')
    .controller('UpdateItemController', require('./update-item-controller.js'))
    .factory('updateFactory', require('./update-factory.js'));
