// TEA - Time Estimation App

angular.module('TEA.services.DialogService', [])
    .service('DialogService', function ($mdDialog, $log) {
        this.showAlert = function (event, title, description, ok) {
            var alert = $mdDialog.alert()
                .title(title)
                .textContent(description)
                .ok(ok)
                .targetEvent(event);

            $mdDialog.show(alert);
        };
    });


angular.module('TEA', ['ngMaterial', 'TEA.services.DialogService'])
    .controller('TEAController', function ($scope, $log, DialogService) {
        $scope.bestCaseGuess = 0.0;
        $scope.middleGroundGuess = 0.0;
        $scope.worstCaseGuess = 0.0;
        $scope.estimation = 0.0;

        /**
         * Perform the estimation and enable the 'clear' button.
         */
        $scope.onEstimateClick = function (best, middle, worst) {

            $log.debug("best case: " + best);
            $log.debug("middle case: " + middle);
            $log.debug("worst case: " + worst);

            $scope.estimation = 0.0;

            $scope.showClear = best !== 0 &&
                middle !== 0 &&
                worst !== 0;

            if (best === undefined || worst === undefined || middle === undefined) {
                return 0.0;
            } else {
                return $scope.estimation = (best +
                    worst + 2 * middle) / 4;
            }
        };

        /**
         * Clear the input fields.
         */
        $scope.clearEstimation = function () {
            $scope.bestCaseGuess = 0.0;
            $scope.middleGroundGuess = 0.0;
            $scope.worstCaseGuess = 0.0;
            $scope.estimation = 0.0;
        };

        /**
         * Show the dialog that informs the user 
         * on the methodology of the estimation.
         */
        $scope.showInfo = function () {
            DialogService.showAlert(null,
                "How do we do this estimation?",
                "You do three estimates for each piece of work: A - Best Case Scenario; B - Worst Case Scenario; C - Middle Ground (what it'll probably take); Estimation = (A+B+2C)/4",
                "Close");
        };
    });