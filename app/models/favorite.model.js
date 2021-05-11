const sql = require("./db.js");

// constructor
const favorite = function(favorite) {
  this.id = favorite.id;
  this.user_id = favorite.user_id;
  this.article_id = favorite.article_id;
  this.article_title = favorite.article_title;
};


favorite.countId = (user_id, result) => {
  sql.query(`select count(*) as c from favorite where user_id = '${user_id}';`, (err, res) => {

    if (res.length) {
      console.log("found count(*) as c", res);
      result(null, res);
      return;
    }
    result(null, res); return;


  });
};


favorite.countArticle = (article_id, result) => {
  sql.query(`select count(*) as c from favorite where article_id = '${article_id}';`, (err, res) => {

    if (res.length) {
      console.log("found count(*) as c", res);
      result(null, res);
      return;
    }
    result(null, res); return;


  });
};



favorite.getId = (user_id, result) => {
  sql.query(`select * from favorite where user_id = '${user_id}';`, (err, res) => {

    if (res.length) {
      console.log("found (*) as c", res);
      result(null, res);
      return;
    }
    result(null, res); return;


  });
};


favorite.check = (user_id, article_id, result) => {
  sql.query(`select count(*) as c from favorite where user_id = '${user_id}' and article_id = '${article_id}';`, (err, res) => {

    if (res.length) {
      console.log("found (*) as c", res);
      result(null, res);
      return;
    }
    result(null, res); return;


  });
};



favorite.getMax = (result) => {
  sql.query(`SELECT article_id AS id, article_title as title, COUNT(article_id) AS count FROM favorite GROUP BY article_id, article_title ORDER BY article_id asc LIMIT 10;`, (err, res) => {  



    if (res.length) {
      console.log("found (*) as c", res);
      result(null, res);
      return;
    }
    result(null, res); return;

  });
};


favorite.create = (newfavorite, result) => {
  sql.query("INSERT INTO favorite SET ?", newfavorite, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created periodical: ", { id: res.insertId, ...newfavorite });
    result(null, { id: res.insertId, ...newfavorite });
  });
};








module.exports = favorite;