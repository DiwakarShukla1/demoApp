;(function () {
	angular
	.module('demoApp')
	.controller('HeaderCtrl', ['$location', HeaderCtrl]);

	function HeaderCtrl ($location) {
		var vm = this;

		vm.linkClick = linkClick;

		function linkClick (id, path) {
			$('ul li').removeClass('active');

			$('#' + id).addClass('active');
			$location.path('/' + path);
		}
	}
}());