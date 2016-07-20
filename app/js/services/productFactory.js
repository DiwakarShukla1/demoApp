;(function () {
	angular
	.module('demoApp')
	.factory('productFactory', ['$http', '$q', productFactory]);

	function productFactory ($http, $q) {
		var allProducts = [];

		var obj = {
			getAllProducts : getAllProducts,
			getProductById : getProductById
		};

		return obj;


		function getAllProducts () {
			var url = '/getallproducts';
			var defered = $q.defer();

			$http
			.get(url)
			.success(function (data) {
				allProducts = data;
				defered.resolve(data);
			});

			return defered.promise;
		}

		function getProductById (id) {
			return _.find(allProducts, {id : id});
		}
	};
}());