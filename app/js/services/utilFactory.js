;(function () {
	angular
	.module('demoApp')
	.factory('utilFactory', [utilFactory]);

	function utilFactory () {
		var obj = {
			activateCurrentLink : activateCurrentLink
		};

		return obj;

		function activateCurrentLink (id) {
			$('ul li').removeClass('active');

			$('#' + id).addClass('active');
		}
	}
}());