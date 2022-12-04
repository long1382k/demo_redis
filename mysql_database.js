class mysql_database {

    getData(callBack) {

        const mysql = require('mysql');

        const mysql_con = mysql.createConnection({
            host: "0.0.0.0",
	    port: 3306,
            user: "e_commerce_user",
            password: "EXAMPLE_PASSWORD",
            database: "e_commerce"
         });

        mysql_con.connect(function(err) {
            if (err) {
                console.log(err.message);
            }
        });

       var queryString = "select * from countries";

       mysql_con.query(queryString , [], function (err, result) {
           if (err) {
               callBack(err, null);
           } else {
               callBack(null, result);
           }
      });

    }
}

module.exports = mysql_database;
