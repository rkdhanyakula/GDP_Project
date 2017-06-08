/**
 * Created by ravi.dhanyakula on 30-May-17.
 */

// GDP World Bank Data Service
myApp.service("gdpDataByWorldBankService", gdpDataByWorldBankService);
gdpDataByWorldBankService.$inject=["$http"];
function gdpDataByWorldBankService($http) {
    this.getWorldBankDataFunc = function(){
      return $http.get("/gdpdata/worldbank").then(function (res){
          return res.data;
      },function (res) {
          return res;
      })
    };
};


myApp.service("gdpDataByIMFundService", gdpDataByIMFundService);
gdpDataByIMFundService.$inject=["$http"];
function gdpDataByIMFundService($http) {
    this.getIMFundDataFunc = function () {
        return $http.get("/gdpdata/imfund").then(function (res) {
            return res.data;
        }, function (res) {
            return res;
        })
    };
}

myApp.service("gdpDataByUnitedNationsService", gdpDataByUnitedNationsService);
gdpDataByUnitedNationsService.$inject=["$http"];
function gdpDataByUnitedNationsService($http) {
    this.getUnitedNationsDataFunc = function () {
        return $http.get("/gdpdata/unitednations").then(function (res) {
            return res.data;
        },function (res) {
            return res;
        })
    }
}

myApp.service("gdpDataByGovtSpendingService", gdpDataByGovtSpendingService);
gdpDataByGovtSpendingService.$inject=["$http"];
function gdpDataByGovtSpendingService($http) {
    this.getGovtSpendingDataFunc = function () {
        return $http.get("/gdpdata/govtspending").then(function (res) {
            return res.data;
        }, function (res) {
            return res;
        })
    }
}

myApp.service("gdpDataByGovtEduExpService", gdpDataByGovtEduExpService);
gdpDataByGovtEduExpService.$inject=["$http"];
function gdpDataByGovtEduExpService($http) {
    this.getGovtEduExpDataFunc = function () {
        return $http.get("/gdpdata/govteduexp").then(function (res) {
            return res.data;
        }, function (res) {
            return res;
        })
    }
}

myApp.service("gdpDataByGdpVsTotalExp", gdpDataByGdpVsTotalExp);
gdpDataByGdpVsTotalExp.$inject=["$http"];
function gdpDataByGdpVsTotalExp($http) {
    this.getVsTotalExpDataFunc = function () {
        return $http.get("/gdpdata/gdpVsTotalExp").then(function (res) {
            return res.data;
        }, function (res) {
            return res;
        })
    }
}
