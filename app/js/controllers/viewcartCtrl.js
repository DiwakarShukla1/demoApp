;(function () {
	angular
	.module('demoApp')
	.controller('ViewCartCtrl', ['cartFactory', '$rootScope', '$location', 'utilFactory', ViewCartCtrl]);

	function ViewCartCtrl (cartFactory, $rootScope, $location, utilFactory) {
		var vm = this;
		vm.cart = cartFactory.getCart();
		$rootScope.cartCount = (typeof $rootScope.cartCount !== 'undefined') ? $rootScope.cartCount : 0;
		
		vm.getGrandTotal = getGrandTotal;
		vm.removeFromCart = removeFromCart;
		vm.placeOrder = placeOrder;

		init();

		function init () {
			utilFactory.activateCurrentLink('viewcart');
		}

		function getGrandTotal () {
			return cartFactory.getGrandTotal();
		}

		function removeFromCart (id) {
			cartFactory.removeFromCart(id);
			vm.cart = cartFactory.getCart();
			$rootScope.cartCount = cartFactory.getCartCount();
		}

		function placeOrder () {
			$location.path('/orders');
		}
	}
}());