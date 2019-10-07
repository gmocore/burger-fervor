const orm = require("../config/orm");

const burger = {
  selectAll: (cb) => {
    orm.displayAll('burgers', res => {
      cb(res);
    })
  },
  create: (burger_name, cb) => {
    orm.create(burger_name, res => {
      cb(res);
    })
  }
  ,
  update: (id,cb) => {
    orm.update(id, res => {
      cb(res);
    })
  }
};
module.exports = burger;
