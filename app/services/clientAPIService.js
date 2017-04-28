module.exports = function($http,configValue){
    var _getClients = function(){
        return $http.get(configValue.API_URL);
    };
    var _getClient = function(id){
        return $http.get(configValue.API_URL + '?id=' + id);
    };
    var _saveClients = function(client){
        return $http.post(configValue.API_URL,client);
    };

    return {
        getClients:_getClients,
        getClient:_getClient,
        saveClients:_saveClients
    };
};