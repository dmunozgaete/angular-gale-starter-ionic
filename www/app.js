/*

    gale:                   ANGULAR-GALE LIBRARY
    ionic:                  IONIC SDK
    app:                    CUSTOM PROJECT LIBRARY
    ngCordova:              CORDOVA LIBRARY

*/
angular.module('App', [
        'gale',
        'ionic',
        'app',
        'ngCordova'
    ])
    .run(function($location, $Configuration, $log) {

        //REDIRECT TO MAIN HOME (ONLY WHEN NO HAVE PATH)
        var currentPath = $location.url();
        var boot = $location.path("boot").search({
            path: currentPath
        });
        $location.url(boot.url());

    })
    //CHANGE STATUS BAR TO LIGHT CONTENT
    .run(function($ionicPlatform) {
        //IOS, SET Light Background in Fullscreen mode
        $ionicPlatform.ready(function() {
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleLightContent();
            }
            //Disable Keyboard Scroll
            if (ionic.Platform.isWebView()) {
                cordova.plugins.Keyboard.disableScroll(true);
            }
        });
    })
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                url: "/app",
                abstract: true,
                // ---------------------------------------------
                // DEFAULT LAYOUT
                // ---------------------------------------------
                templateUrl: "views/layouts/default.html",
                controller: "DefaultLayoutController"
            })
            .state('exception', {
                url: "/exception",
                abstract: true,
                // ---------------------------------------------
                // EXCEPTION TEMPLATE
                // ---------------------------------------------
                templateUrl: "views/layouts/exception.html",
                controller: "ExceptionLayoutController"
            });

        $urlRouterProvider.otherwise(function($injector, $location) {
            if ($location.path() !== "/") {
                var $state = $injector.get("$state");
                var $log = $injector.get("$log");

                $log.error("404", $location);
                $state.go("exception.error/404");
            }
        });
    })
    .config(function($logProvider, CONFIGURATION) {
        $logProvider.debugEnabled(CONFIGURATION.debugging || false);
    });
