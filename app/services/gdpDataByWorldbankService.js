/**
 * Created by ravi.dhanyakula on 30-May-17.
 */

// GDP World Bank Data Service
myApp.service("gdpDataByWorldBankService", gdpDataByWorldBankService);
gdpDataByWorldBankService.$inject=["$http"];
function gdpDataByWorldBankService($http) {
    this.getDataFunc = function(){
      return $http.get("http://localhost:8000/getGdpDataByWorldBank").then(function (res){
          return res.data;
      },function (res) {
          return res;
      })
    };
};
