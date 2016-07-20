;(function () {
	angular
	.module('demoApp')
	.factory('cartFactory', ['productFactory', cartFactory]);

	function cartFactory (productFactory) {
		var cart = [];

		var obj = {
			addToCart : addToCart,
			getCartCount : getCartCount,
			getCart : getCart,
			removeFromCart : removeFromCart,
			getGrandTotal : getGrandTotal
		};

		return obj;

		function getGrandTotal () {
			var grandTotal = 0, 
				cartWithDetails = getCart();
			for (var i = 0, ii = cartWithDetails.length; i < ii; i++) {
				grandTotal += cartWithDetails[i].count * cartWithDetails[i].price;
			}
			return grandTotal;
		}

		function getCart () {
			var cartWithDetails = [], product, obj;
			for (var i = 0, ii = cart.length; i < ii; i++) {
				product = {};
				product = productFactory.getProductById(cart[i].id);
				product.count = cart[i].count;
				cartWithDetails.push(product);
			}

			return cartWithDetails;
		}

		function getCartCount () {
			var totalCount = 0;
			for (var i = 0, ii = cart.length; i < ii; i++) {
				totalCount += cart[i].count;
			}

			return totalCount;
		}

		function addToCart (productId) {
			var product = _.find(cart, {id : productId}), obj = {};
			
			if (product) {
				product.count++;
			} else {
				obj = {
					id : productId, 
					count : 1
				};
				cart.push(obj);
			}
		}

		function removeFromCart (productId) {
			var index = _.findIndex(cart, {id : productId});
			if ( index !== -1) {
				cart.splice(index, 1);
			}
		}

	}
}());