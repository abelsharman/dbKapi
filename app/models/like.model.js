const sql = require("./db.js");

// constructor
const liked = function(liked) {
  this.id = liked.id;
  this.browser_id = liked.browser_id;
  this.article_id = liked.article_id;
  this.article_title = liked.article_title;
};


liked.countId = (browser_id, result) => {
  sql.query(`select count(*) as c from liked where browser_id = '${browser_id}';`, (err, res) => {

    if (res.length) {
      console.log("found count(*) as c", res);
      result(null, res);
      return;
    }
    result(null, res); return;


  });
};


liked.countArticleId = (article_id, result) => {
  sql.query(`select count(*) as c from liked where article_id = '${article_id}';`, (err, res) => {

    if (res.length) {
      console.log("found count(*) as c", res);
      result(null, res);
      return;
    }
    result(null, res); return;


  });
};


liked.getId = (browser_id, result) => {
  sql.query(`select * from liked where browser_id = '${browser_id}';`, (err, res) => {

    if (res.length) {
      console.log("found * as c", res);
      result(null, res);
      return;
    }
    result(null, res); return;


  });
};


liked.check = (browser_id, article_id, result) => {
  sql.query(`select count(*) as c from liked where browser_id = '${browser_id}' and article_id = '${article_id}';`, (err, res) => {

    if (res.length) {
      console.log("found * as c", res);
      result(null, res);
      return;
    }
    result(null, res); return;


  });
};



liked.create = (newliked, result) => {
  sql.query("INSERT INTO liked SET ?", newliked, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created periodical: ", { id: res.insertId, ...newliked });
    result(null, { id: res.insertId, ...newliked });
  });
};





module.exports = liked;