require('angular').module('shopApp')
    .value('itemsApi', '/myapplication/items')
    .value('addItemApi', '/myapplication/additem')
    .value('deleteItemApi', '/myapplication/deleteitem')
    .value('updateItemApi', '/myapplication/updateitem');
