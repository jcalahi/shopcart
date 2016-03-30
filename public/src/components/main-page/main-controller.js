function MainController($state, itemsFactory, deleteFactory) {
    var mc = this;

    mc.items = [];

    itemsFactory.getItems('all').then(function(response) {
        mc.items = response.data;
    });

    mc.addItem = function() {
        $state.go('add');
    };

    mc.deleteButton = function(item) {
        deleteFactory.deleteItem(item._id).then(function(response) {
            if (response.status === 200) {
                itemsFactory.getItems('all').then(function (res) {
                    mc.items = res.data;
                });
            }
        });
    };

    mc.update = function(item) {
        $state.go('update', { _item: item });
    };
}

module.exports = MainController;
