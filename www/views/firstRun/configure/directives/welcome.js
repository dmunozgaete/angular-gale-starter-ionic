angular.module("app")
    .directive('welcome', function() {
        return {
            restrict: 'E',
            scope:  {
                onComplete: '&' //Complete Step
            },
            templateUrl: 'views/firstRun/configure/directives/welcome.html',
            controller: function($scope, $ionicLoading, $Configuration, $LocalStorage, $log) {

                // Activate Function 
                $scope.activate = function() {

                    $ionicLoading.show({
                        template: 'Iniciando...',
                    });

                    //Set user personal data!
                    var stamps = $Configuration.get("stamps");
                    $LocalStorage.setObject(stamps.personal_data, { firstTime: false });

                    //Trigger to parent scope  
                    $ionicLoading.hide();
                    $scope.onComplete();
                };

            }
        };
    });
