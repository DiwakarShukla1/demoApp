;(function () {
	angular
	.module('demoApp')
	.controller('HomeCtrl', ['$location','productFactory', 'cartFactory', '$rootScope', 'utilFactory',  HomeCtrl]);

	function HomeCtrl ($location, productFactory, cartFactory, $rootScope, utilFactory) {

		var vm = this;
		vm.products = [];
		$rootScope.cartCount = (typeof $rootScope.cartCount !== 'undefined') ? $rootScope.cartCount : 0;

		vm.addToCart = addToCart;
		vm.viewCartDetails = viewCartDetails;
		vm.buyNow = buyNow;
		
		init();

		function init() {
			productFactory
			.getAllProducts()
			.then(function (products) {
				vm.products = products;
			});

			utilFactory.activateCurrentLink('home');
		}

		function addToCart (productId) {
			cartFactory
			.addToCart(productId);

			$rootScope.cartCount = cartFactory.getCartCount();
		}

		function viewCartDetails () {
			$location.path('/viewcart');
		}

		function buyNow (id) {
			addToCart(id);
			$location.path('/viewcart');
		}
	}
}());