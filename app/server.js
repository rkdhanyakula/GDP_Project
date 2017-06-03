
var express = require("express");
var mysql = require("mysql");

var app = express();
console.log("__dirname");
console.log(__dirname);
app.use(express.static(__dirname + "/../app"));

var connection = mysql.createConnection({
    host : "65.19.134.180",
    user : "rkdesig1_admin",
    password : "rkdesig1_admin",
    database : "rkdesig1_censof"

    // host : "localhost",
    // user : "root",
    // password : "root",
    // database : "DEMO"
});

console.log(connection);

connection.connect();
console.log(connection);
app.get("/", function (req, res) {
    res.redirect("index.html")
});

app.get("/gdpdata/worldbank", function (req,res) {
    var dbQuery = "SELECT * FROM rkdesig1_censof.GDP_WB_DATA";
    connection.query(dbQuery, function (err, records, fields) {
        res.send(records);
    });

});

app.get("/gdpdata/imfund", function (req, res) {
   var dbQuery = "SELECT * FROM rkdesig1_censof.GDP_IMF_DATA"
    connection.query(dbQuery, function (err, records, fields) {
        res.send(records);
    });
});

app.get("/gdpdata/unitednations", function (req, res) {
    var dbQuery = "SELECT * FROM rkdesig1_censof.GDP_UN_DATA;";
    connection.query(dbQuery, function (err, records, fields) {
       res.send(records);
    });
})

app.get("/gdpdata/govtspending", function (req,res) {
    var dbQuery = "SELECT * FROM rkdesig1_censof.GDP_GOVT_EXP;";
    connection.query(dbQuery, function (err, records, fields) {
        res.send(records);
    })
})

app.listen(8090);
console.log("Server Listening Port 8090");

