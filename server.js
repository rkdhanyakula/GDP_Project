/**
 * Created by ravi.dhanyakula on 30-May-17.
 */

var express = require("express");
var mysql = require("mysql");

var app = express();
app.use(express.static(__dirname + "../app"));

var connection = mysql.createConnection({
    host : "65.19.134.180",
    user : "rkdesig1_admin",
    password : "rkdesig1_admin",
    database : "rkdesig1_censof"
});


connection.connect();
app.get("/", function (req, res) {
    res.redirect("index.html")
});

app.get("/getGdpDataByWorldBank", function (req,res) {
   var dbQuery = "SELECT * FROM GDP_WB_DATA";
   connection.query(dbQuery, function (err, records, fields) {
       res.send(records);
   })

});

app.listen(8080);
console.log("Server Listening Port 8080");

