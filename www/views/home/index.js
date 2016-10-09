angular.route('app.home/index', function(
    $scope,
    $state,
    $log,
    $interval
) {

    $scope.myName = "David";
    $scope.items = [];

    $scope.click = function(messag) {
        $log.debug(messag);
    };

    $interval(function() {

        $scope.items.push(
            (new Date()).toISOString()
        );

    }, 10000);

});
