// set up connection to database
const sql = require("mysql");

// connetion and credentials to export
const connection = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "gerritt",
  database: "burger_db",
  port: 3306
});

// connection to db
connection.connect(err => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log(`connected as id ${connection.threadId}`)
})

//export to use with orm
module.exports = connection;
