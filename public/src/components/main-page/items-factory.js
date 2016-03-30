function itemsFactory($http, itemsApi) {
    return {
        getItems: getItems
    };

    function getItems(query) {
        var request = {
            method: 'GET',
            url: itemsApi,
            params: {
                q: query
            }
        };

        return $http(request).then(function(response) {
            return response;
        });
    }
}

module.exports = itemsFactory;
