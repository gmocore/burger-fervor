const sql = require("mysql");

const connection = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "gerritt",
  database: "burger_db",
  port: 3306
});

// connection.connect();
connection.connect(err => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log(`connected as id ${connection.threadId}`)
})

module.exports = connection;
