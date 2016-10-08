angular.route('app.firstRun/configure/index', function(
    $scope,
    $state,
    $log
) {
    //---------------------------------------------------
    //New Slider (Ionic 1.2)
    var slider = null;
    $scope.$watch("slider", function(value) {
        if (value) {
            slider = value;
        }
    });
    //---------------------------------------------------

    $scope.next = function(id) {
        switch (id) {
            case "WELCOME":
                $state.go("app.home");
                //slider.slideNext();
                break;
        }
    };
});
