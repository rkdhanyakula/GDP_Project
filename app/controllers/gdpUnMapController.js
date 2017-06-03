/**
 * Created by ravi.dhanyakula on 29-May-17.
 */

myApp.controller("gdpUnMapController", gdpUnMapController);

gdpUnMapController.$inject = ["$scope", "gdpDataByUnitedNationsService"];

function gdpUnMapController($scope, gdpDataByUnitedNationsService, $rootScope) {
    var markersData = [];
    $scope.map_title = "Countries By GDP - Per the United Nations";
    gdpDataByUnitedNationsService.getUnitedNationsDataFunc().then(function (response) {

        $scope.data = response;

        var m = 0;
        angular.forEach($scope.data, function (value, key) {

            console.log("m" + m++);
            console.log("Value : " + JSON.stringify(value));

            var markerNum = 'm' + m++;

            markersData.push({
                'lat': value.COUNTRY_LAT,
                'lng': value.COUNTRY_LONG,
                'focus': false,
                'draggable': false,
                'message': "<table class='table table-bordered table-responsive table-striped marker-tooltip-table'>" +
                "<tr><th colspan='2'>GDP - Per the United Nations</td></tr>" +
                "<tr><td>Country</td><td>" + value.COUNTRY + "</td></tr>" +
                "<tr><td>Rank </td><td>" + value.RANK + "</td></tr>" +
                "<tr><td>GDP <br/><span style='font-size: 14px;'>(Millions of US$)</span></td><td>$" + value.GDP_IN_MILLIONS + "</td></tr>" +
                "</table>",
                icon: {}
            });


        })

        console.log("markersData >>>>>>");
        console.log(markersData);

        var stringifyData = JSON.stringify(markersData).replace(/'/g, "");
        console.log(stringifyData);

    });


    angular.extend($scope, {
        malaysia: {
            lat: 4.21048,
            lng: 101.976,
            zoom: 6
        },

        markers: markersData,
        events: {
            markers: {
                enable: ['dragend']
            }
        }
    });

}
