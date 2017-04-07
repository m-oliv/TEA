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
        }

        $scope.clearEstimation = function () {
            $scope.bestCaseGuess = 0.0;
            $scope.middleGroundGuess = 0.0;
            $scope.worstCaseGuess = 0.0;
            $scope.estimation = 0.0;
            $scope.showEstimation = false;
        }
    });
/*
Copyright 2016 Google Inc. All Rights Reserved. 
Use of this source code is governed by an MIT-style license that can be in foundin the LICENSE file at http://material.angularjs.org/license.
*/