angular.route('boot/index', function(
    $state,
    $log,
    $Configuration,
    $location,
    $LocalStorage,
    $cordovaSplashscreen
) {
    //Wait for Platform Ready
    ionic.Platform.ready(function() {
        var stamps = $Configuration.get("stamps");

        // --------------------------------
        //Hide Splash Screen 
        if (ionic.Platform.isWebView()) {
            $cordovaSplashscreen.hide();
        }

        // --------------------------------
        //FIRST TIME???, CONFIGURE!!
        if (!$LocalStorage.get(stamps.personal_data)) {
            $state.go("app.firstRun/configure");
            return;
        }

        // --------------------------------
        // MANUAL BOOT
        var path = $location.search().path;

        //Reset when path are in "boot" or "exception"
        if (path.length <= 2 ||
            path.indexOf("/boot") == 0 ||
            path.indexOf("exception") > 0) {
            var url = $Configuration.get("application");
            path = url.home;
        }

        $location.url(path);
        // --------------------------------
    });

});
