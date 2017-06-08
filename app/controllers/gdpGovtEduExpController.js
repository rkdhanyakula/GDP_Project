/**
 * Created by ravi.dhanyakula on 29-May-17.
 */

myApp.controller("gdpGovtEduExpController", gdpGovtEduExpController);

gdpGovtEduExpController.$inject = ["$scope", "gdpDataByGovtEduExpService"];

function gdpGovtEduExpController($scope, gdpDataByGovtEduExpService, $rootScope) {


    var heatMapData = [];

    $scope.map_title = "Countries By Government Spending On Education as a % of GDP";

    $scope.sample_data = [
        {"name": "alpha", "skill": "power", "value": 4},
        {"name": "alpha", "skill": "courage", "value": 8},
        {"name": "alpha", "skill": "wisdom", "value": 2},
        {"name": "beta", "skill": "power", "value": 5},
        {"name": "beta", "skill": "courage", "value": 4},
        {"name": "beta", "skill": "wisdom", "value": 6}
    ];

    gdpDataByGovtEduExpService.getGovtEduExpDataFunc().then(function (response) {

        $scope.data = response;

        angular.forEach($scope.data, function (value, key) {


            //console.log("Value : " + JSON.stringify(value));

            heatMapData.push({
                'name': value.COUNTRY,
                'value': value.EDU_EXP,
                'skill': value.EDU_EXP

            });


        });


        $scope.ngHeatMapData = heatMapData;
        console.log("$scope.ngHeatMapData");
        console.log($scope.ngHeatMapData);


    })
};
