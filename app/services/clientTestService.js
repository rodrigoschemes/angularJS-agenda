module.exports = function($http,configValue){
    this.getClients = function(){
        return $http.get(configValue.API_URL);
    };
    this.saveClients = function(client){
        return $http.post(configValue.API_URL,client);
    };

};