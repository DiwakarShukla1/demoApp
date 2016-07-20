;(function () {
	angular
	.module('demoApp', ['ui.router'])
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$stateProvider

		.state('home', {
			url : '/home',
			templateUrl : 'templates/home.html',
			controller : 'HomeCtrl as ctrl'
		})

		.state('viewcart', {
			url : '/viewcart',
			templateUrl : 'templates/viewcart.html',
			controller : 'ViewCartCtrl as ctrl'
		})

		.state('orders', {
			url : '/orders',
			templateUrl : 'templates/orders.html',
			controller : 'OrderCtrl as ctrl'	
		})

		$urlRouterProvider.otherwise('/home');
	}]);
}());