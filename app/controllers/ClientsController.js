module.exports = function($scope,$http,$filter,clientAPIService,clientTestService,configValue,bonusGenerator,routeInfo){
    $scope.name = $filter("uppercase")(configValue.APP_NAME);
    $scope.msg = "";
    $scope.clients = [];
    $scope.page = routeInfo.routeName;
    $scope.navClass = routeInfo.navClass;

    $scope.day = new Date();
    $scope.total = 27.35;

    $scope.bonus = 'Cod.Bonus: ' + bonusGenerator.generator();


    var listClients = function(){
        clientAPIService.getClients().then(function(data,status){
            $scope.clients = data.data;
        });
    };
    var addClients = function(client){
        clientTestService.saveClients(client).then(function(data,status){
            listClients();
        });
    };
    var destroyClients = function(client){
        client.delete = true;
        clientAPIService.saveClients(client).then(function(data,status){
        });
    };

    listClients();

    $scope.add = function(client){
        addClients(angular.copy(client));
        $scope.formClient.$setPristine();
        delete $scope.client;
        $scope.msg = "Successfully added record";

    };
    $scope.edit = function(client){
        $scope.client = client;
        $scope.editing = true;
        $scope.msg = "";
    };
    $scope.save = function() {
        addClients(angular.copy($scope.client));
        $scope.formClient.$setPristine();
        delete $scope.client;
        $scope.editing = false;
        $scope.msg = "Successfully edited record";
    };
    $scope.destroy = function(client) {
        $scope.clients.splice($scope.clients.indexOf(client),1);
        destroyClients(client);
        $scope.msg = "Successfully deleted record";

    };
    $scope.orderBy = function(col){
        $scope.order = col;
        $scope.reverse = !$scope.reverse;
    };
};