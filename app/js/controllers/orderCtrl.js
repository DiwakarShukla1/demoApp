;(function () {
	angular
	.module('demoApp')
	.controller('OrderCtrl', ['cartFactory', '$rootScope', 'utilFactory', OrderCtrl]);

	function OrderCtrl (cartFactory, $rootScope, utilFactory) {
		var vm = this;
		vm.details = {
			name : '',
			phonenumber : '',
			address : ''
		};

		vm.orderPlaced = false;
		$rootScope.cartCount = (typeof $rootScope.cartCount !== 'undefined') ? $rootScope.cartCount : 0;

		vm.grandTotal = cartFactory.getGrandTotal();
		vm.orderNow = orderNow;

		init();

		function init () {
			utilFactory.activateCurrentLink('orders');
		}

		function orderNow (order) {
			vm.orderPlaced = true;
			vm.invalidForm = false;
			if (vm.details.name === '' || vm.details.phonenumber === '' || vm.details.address === '') {
				vm.invalidForm = true;
			}
		}
	}
}());