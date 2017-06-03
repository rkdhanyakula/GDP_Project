/**
 * Created by ravi.dhanyakula on 29-May-17.
 */

myApp.controller("gdpWbMapController", gdpWbMapController);

gdpWbMapController.$inject = ["$scope", "gdpDataByWorldBankService"];

function gdpWbMapController($scope, gdpDataByWorldBankService, $rootScope) {


    var markersData = [];

    $scope.map_title = "Countries By GDP - Per the World Bank";
    gdpDataByWorldBankService.getWorldBankDataFunc().then(function (response) {

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
                // 'message': value.COUNTRY,
                // message : "<h1>Hai</h1>",
                'message': "<table class='table table-bordered table-responsive table-striped marker-tooltip-table'>" +
                "<tr><th colspan='2'>GDP - Per the World Bank</th></tr>" +
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
        // markers: {
        //     m1: {
        //         lat: 4.21048,
        //         lng: 101.976,
        //         focus: false,
        //         draggable: false,
        //         message: toolTip,
        //         country : "Malaysia",
        //         icon: {}
        //     },
        //     m2 : {
        //         lat: 1.35208,
        //         lng: 103.82,
        //         focus: false,
        //         draggable: false,
        //         message: toolTip,
        //         country : "Singapore",
        //         icon: {}
        //     }
        // },
        markers: markersData,
        events: {
            markers: {
                enable: ['dragend']
                //logic: 'emit'
            }
        }
    });


}