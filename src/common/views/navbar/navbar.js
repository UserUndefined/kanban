(function() {

	var module = angular.module("navbarModule", [
		"expandableTextDirectiveModule"
	]);


	module.controller("navbarCtrl", [
		"$scope",
		function($scope) {

			$scope.appName = "Order Tracker";
			$scope.jpAppName = "PromoteUk";
			$scope.menuLinks = [{
				state: "kanban.boardList",
				name: "Boards"
			}, {
				state: "kanban.about",
				name: "About"
			}, {
				state: "kanban.oauth",
				name: "Login"
			}];
		}
	]);
})();
