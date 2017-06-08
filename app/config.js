/**
 * Created by ravi.dhanyakula on 30-May-17.
 */

myApp.config(config);
config.$inject=["$stateProvider","$urlRouterProvider"];

function config($stateProvider,$urlRouterProvider){
    $stateProvider.state("gdpWbMap",{
        url:"/gdpWbMap",
        templateUrl:"templates/pages/gdpWbMap.html",
        controller:"gdpWbMapController"
    }).state("gdpImfMap", {
        url:"/gdpImfMap",
        templateUrl:"templates/pages/gdpImfMap.html",
        controller:"gdpImfMapController"
    }).state("gdpUnMap", {
        url:"/gdpUnMap",
        templateUrl:"templates/pages/gdpUnMap.html",
        controller:"gdpUnMapController"
    }).state("gdpGsMap", {
        url:"/gdpGsMap",
        templateUrl:"templates/pages/gdpGsMap.html",
        controller:"gdpGsMapController"
    }).state("gdpEduExp", {
        url:"/gdpEduExp",
        templateUrl:"templates/pages/gdpEduExp.html",
        controller:"gdpGovtEduExpController"
    }).state("gdpVsTotalExp", {
        url:"/gdpVsTotalExp",
        templateUrl:"templates/pages/gdpVsTotalExp.html",
        controller:"gdpVsTotalExpController"
    }).state("whatIsGdp",{
        url : "/whatIsGdp",
        templateUrl : "templates/staticPages/whatIsGdp.html",
        controller : ''
    });

   $urlRouterProvider.otherwise("/gdpWbMap");
}

