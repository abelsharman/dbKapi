const sql = require("./db.js");

// constructor
const browser = function(browser) {
  this.id = browser.id;
  this.name = browser.name;
};




browser.insert = (name, result) => {
    sql.query(`insert into browser(name) values('${name}');`, (err, res) => {
  
      if (res.length) {
        console.log("found browser: ", res);
        result(null, res);
        return;
      }
      result(null, res); return;
  
  
    });
  };


browser.getMax = (result) => {
    sql.query(`select max(id) as max from browser;`, (err, res) => {
  
      if (res.length) {
        console.log("found browser: ", res);
        result(null, res);
        return;
      }
      result(null, res); return;
  
  
    });
};





module.exports = browser;