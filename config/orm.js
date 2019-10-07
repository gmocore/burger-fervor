const connection = require("./connection");

const orm = {
  displayAll: (tableName, cb) => {
    let queryString = `SELECT * FROM ${tableName};`;
    connection.query(queryString, (error, result) => {
      if (error) throw error;
      cb(result)
    })
  },
  create: (burger_name, cb) => {
    let queryString = `INSERT INTO burgers SET ?;`;

    connection.query(queryString, {burger_name: burger_name}, (error, result) => {
      if (error) throw error;

      cb(result)
    })
  },
  update: (id, cb) => {
    connection.query(`UPDATE burgers SET ? WHERE id = ?`, [{devoured: true}, {id: id}], (error, result) => {
      if (error) throw error;
      cb(result);
    })
  }
};

module.exports = orm;
