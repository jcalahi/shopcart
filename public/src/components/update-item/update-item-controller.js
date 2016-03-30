function UpdateItemController($state, _item, updateFactory) {
    var uc = this;

    uc.item = _item;

    uc.categories = [
        "GPUs",
        "HDD",
        "Keyboards",
        "Monitors",
        "Motherboard",
        "Mouse",
        "Power Supplies",
        "Processors"
    ];

    uc.update = function(item) {
        updateFactory.update(item).then(function(response) {
            if (response.status === 200) {
                $state.go('main');
            }
        });
    };
}

module.exports = UpdateItemController;
