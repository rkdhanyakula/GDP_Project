/**
 * Created by ravi.dhanyakula on 29-May-17.
 */

myApp.controller("gdpWbMapController", gdpWbMapController);
gdpWbMapController.$inject = ["$scope", "gdpDataByWorldBankService"];
function gdpWbMapController($scope, gdpDataByWorldBankService) {
    $scope.map_title = "Countries By GDP - Per the World Bank";
    gdpDataByWorldBankService.getDataFunc().then(function (response) {
       $scope.data = response;
    });

};