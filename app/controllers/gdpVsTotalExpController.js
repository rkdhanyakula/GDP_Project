/**
 * Created by ravi.dhanyakula on 29-May-17.
 */

myApp.controller("gdpVsTotalExpController", gdpVsTotalExpController);

gdpVsTotalExpController.$inject = ["$scope", "gdpDataByGdpVsTotalExp", "$http"];

function gdpVsTotalExpController($scope, gdpDataByGdpVsTotalExp, $rootScope, $http) {


    var chartDataa = [];
    var jsonDataa = [];

    var gdpData = [];
    var totalExpData = [];

    $scope.map_title = "GDP (Gross Domestic Product) vs Total Expenditure";


    gdpDataByGdpVsTotalExp.getVsTotalExpDataFunc().then(function (response) {

        $scope.data = response;
        $scope.serial = 0;

        console.log("$scope.data");
        console.log($scope.data);

        angular.forEach($scope.data, function (value, key) {


            gdpData.push({
                "label" : value.COUNTRY ,
                "value" : value.GDP
            })

            totalExpData.push({
                "label" : value.COUNTRY ,
                "value" : value.TOTAL_EXP
            })

        });

        console.log("chartDataa");
        console.log(chartDataa);



    })

    var jsonDataa = [
        {
            "key": "GDP",
            "color": "#cccc33",
            "values": gdpData
        },
        {
            "key": "Total Expenditure",
            "color": "#428484",
            "values": totalExpData
        }
    ]

    console.log("jsonDataa");
    console.log(jsonDataa);

    $rootScope.finalChartData = jsonDataa;
    console.log("$rootScope.finalChartData  >>>>>>>>>>>>>>>>>>>> ");
    console.log($rootScope.finalChartData);


    $scope.chartOptions = {
        chart: {
            type: 'multiBarHorizontalChart',
            height: 7500,
            "margin": {
                "top": 80,
                "right": 80,
                "bottom": 80,
                "left": 180
            },
            x: function(d){return d.label;},
            y: function(d){return d.value;},
            showControls: true,
            showValues: true,
            duration: 500,
            stacked : true,
            xAxis: {
                showMaxMin: false
            },
            yAxis: {
                axisLabel: 'Millions in USD',
                tickFormat: function(d){
                    return d3.format(',f')(d);
                }
            }
        }
    };

    $scope.chartData = $rootScope.finalChartData;


};
