function deleteFactory($http, deleteItemApi) {
    return {
        deleteItem: deleteItem
    };

    function deleteItem(id) {
        var request = {
            method: 'DELETE',
            url: deleteItemApi,
            params: {
                id: id
            }
        };

        return $http(request).then(function(response) {
            return response;
        });
    }
}

module.exports = deleteFactory;
