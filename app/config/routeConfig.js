module.exports = function($routeProvider){
    $routeProvider.when("/home",{
        templateUrl:"view/home.html",
        controller:"MainController",
        resolve:{
            routeInfo:function(){
                return {routeName:"Home",navClass:"navbar-default"};
            }
        }
    });
    $routeProvider.when("/clients",{
        templateUrl:"view/clients.html",
        controller:"ClientsController",
        resolve:{
            routeInfo:function(){
                return {routeName:"Home",navClass:"navbar-inverse"};
            }
        }
    });
    $routeProvider.when("/detail/:id",{
        templateUrl:"view/detail.html",
        controller:"DetailController",
        resolve:{
            routeInfo:function(){
                return {routeName:"Detail",navClass:"navbar-inverse"};
            }
        }
    });
    $routeProvider.otherwise({redirectTo:"/home"});
};