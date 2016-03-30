function updateFactory($http, updateItemApi) {

    return {
        update: update
    };

    function update(item) {
        var request = {
            method: 'PUT',
            url: updateItemApi,
            data: item
        };

        return $http(request).then(function(response) {
            return response;
        });
    }
}

module.exports = updateFactory;
