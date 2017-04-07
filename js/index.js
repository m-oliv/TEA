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
        $scope.showEstimation = false;

        $scope.onEstimateClick = function (best, middle, worst) {
        
            $log.debug("best case: "+best);
            $log.debug("middle case: "+middle);
            $log.debug("worst case: "+worst);

            $scope.showEstimation = true;
            return $scope.estimation = (best +
                worst + 2 * middle) / 4;
        };

        $scope.clearEstimation = function () {
            $scope.bestCaseGuess = 0.0;
            $scope.middleGroundGuess = 0.0;
            $scope.worstCaseGuess = 0.0;
            $scope.estimation = 0.0;
            $scope.showEstimation = false;
        };

        $scope.showInfo = function(){
            DialogService.showAlert(null,
            "How do we do this estimation?",
            "You do three estimates for each piece of work:\nA - Best Case Scenario\nB - Worst Case Scenario\nC - Middle Ground (what it'll probably take)\nEstimation = (A+B+2C)/4",
            "Close");
        };
    });