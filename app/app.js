require('angular');
require('angular-route');
require('./locale/angular-locale_pt-br');

var routeConfig = require('./config/routeConfig');
var configConstant = require('./config/configConstant');
var configValue = require('./config/configValue');
var configBonusProvider = require('./config/configBonusProvider');
var bonusGenerator = require('./services/bonusGenerator');
var clientAPIService = require('./services/clientAPIService');
var clientTestService = require('./services/clientTestService');
var MainController = require('./controllers/MainController');
var ClientsController = require('./controllers/ClientsController');
var DetailController = require('./controllers/DetailController');
var maskTel = require('./directives/maskTel');
var alertMsg = require('./directives/alertMsg');

angular.module('app',['ngRoute']);
angular.module('app').constant('configConstant',configValue);
angular.module('app').value('configValue',configValue);
angular.module('app').provider('bonusGenerator',[bonusGenerator]);

angular.module('app').config(['bonusGeneratorProvider','configConstant',configBonusProvider]);
angular.module('app').config(['$routeProvider',routeConfig]);

angular.module('app').factory('clientAPIService',['$http','configValue',clientAPIService]);
angular.module('app').service('clientTestService',['$http','configValue',clientTestService]);
angular.module('app').directive('maskTel',[maskTel]);
angular.module('app').directive('alertMsg',[alertMsg]);
angular.module('app').controller('MainController',['$scope','$filter','configValue','routeInfo',MainController]);
angular.module('app').controller('ClientsController',['$scope','$http','$filter','clientAPIService','clientTestService','configValue','bonusGenerator','routeInfo',ClientsController]);
angular.module('app').controller('DetailController',['$scope','$filter','clientAPIService','configValue','routeInfo','$routeParams',DetailController]);