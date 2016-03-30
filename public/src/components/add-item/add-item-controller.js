function AddItemController($state, addItemFactory) {
    var ac = this;

    ac.item = {};

    ac.categories = [
        "GPUs",
        "HDD",
        "Keyboards",
        "Monitors",
        "Motherboard",
        "Mouse",
        "Power Supplies",
        "Processors"
    ];

    ac.addButton = function(item) {
        addItemFactory.addItem(item).then(function(response) {
            if (response.status === 200) {
                $state.go('main');
            }
        });
    };
}

module.exports = AddItemController;
