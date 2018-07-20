var mysql = require ("mysql");
var config = require ("./config.json");
var connection = mysql.createConnection(config.sqlconnection);
var query = 'SELECT 1+1 AS solution';

query = `CREATE TABLE mine (
  PersonID int primary key,
  Last_Name varchar(100),
  First_Name varchar(100),
  State varchar(2)
);`;

connection.connect();
connection.query(query,
  function(err, rows, fields) {
    connection.end();
    if (err) {
      throw err;
    }

    console.log('The solution is: ',rows[0], solution);
  }
);
