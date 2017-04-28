module.exports = function($scope,$filter,clientAPIService,configValue,routeInfo,$routeParams){
    $scope.name = $filter("uppercase")(configValue.APP_NAME);
    $scope.msg = "";
    $scope.client = [];
    $scope.page = routeInfo.routeName;
    $scope.navClass = routeInfo.navClass;


    var listClient = function(){
        clientAPIService.getClient($routeParams.id).then(function(data,status){
            $scope.client = data.data;
        });
    };

    listClient();

};