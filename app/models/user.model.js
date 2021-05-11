const sql = require("./db.js");

// constructor
const user = function(user) {
  this.id = user.id;
  this.login = user.login;
  this.password = user.password;
};


user.register = (login, password, result) => {
  sql.query(`insert into user(login, password) values('${login}', '${password}');`, (err, res) => {

    if (res.length) {
      console.log("found user: ", res);
      result(null, res);
      return;
    }
    result(null, res); return;


  });
};


user.login = (login, password, result) => {
    sql.query(`SELECT * FROM user WHERE login = '${login}' and password='${password}';`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found user: ", res);
        result(null, res);
        return;
      }
  
      result({ kind: "not_found" }, null);
    });
  };





module.exports = user;