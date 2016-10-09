angular.module('app.components')

.directive('workshopLoading', function() {
    return {
        restrict: 'E',
        scope: {
            name: '@',
            items: '=',
            buttonClick: '&'
        },
        templateUrl: 'bundles/app/components/workshop-loading/workshop-loading.tpl.html',
        controller: function($scope, $element) {


            $scope.click = function() {
                var handler = $scope.buttonClick();
                if(handler){
                	handler("aasdjasd");
                }
            };

        }
    };
});
