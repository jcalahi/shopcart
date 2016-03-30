function addItemFactory($state, $http, addItemApi) {
    return {
        addItem: addItem
    };

    function addItem(item) {
        var request = {
            method: 'POST',
            url: addItemApi,
            data: item
        };

        return $http(request).then(function(response) {
            return response;
        });
    }
}

module.exports = addItemFactory;
