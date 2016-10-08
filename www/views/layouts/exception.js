angular.module('app.layouts')

.controller('ExceptionLayoutController', function($window, $scope) {

    $scope.back = function() {
        $window.history.back();
    };

});