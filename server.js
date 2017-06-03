/**
 * Created by ravi.dhanyakula on 30-May-17.
 */

var express = require("express");
var mysql = require("mysql");

var app = express();
console.log("__dirname");
console.log(__dirname);
app.use(express.static(__dirname + "/../app"));

var connection = mysql.createConnection({
    // host : "65.19.134.180",
    // user : "rkdesig1_admin",
    // password : "rkdesig1_admin",
    // database : "rkdesig1_censof"

    host : "localhost",
    user : "root",
    password : "root",
    database : "DEMO"
});

console.log("connection");
console.log(connection);


connection.connect();

console.log("connection 2");
console.log(connection);
app.get("/", function (req, res) {
    res.redirect("/index.html")
});

app.get("/getGdpDataByWorldBank", function (req,res) {
   var dbQuery = "SELECT * FROM GDP_WB_DATA";
   var dbQueryTwo = "SELECT * FROM demo.address1"
   connection.query("SELECT * FROM address1", function (err, records, fields) {
       // console.log(err);
       //console.log(records);
       res.send(records);

   })

});

app.listen(8080);
console.log("Server Listening Port 8080");

