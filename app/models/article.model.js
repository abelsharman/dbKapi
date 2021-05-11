const sql = require("./db.js");

// constructor
const article = function(article) {
    this.id = article.id;
    this.title = article.title;
    this.publication = article.publication;
    this.author = article.author;
    this.date = article.date;
    this.year = article.year;
    this.MONTH = article.MONTH;
    this.url = article.url;
    this.content = article.content;
  };

article.getAll = (result) => {
    sql.query(`select * from article limit 100;`, (err, res) => {
  
      if (res.length) {
        console.log("found article: ", res);
        result(null, res);
        return;
      }
      result(null, res); return;
  
  
    });
};

article.getId = (id, result) => {
  sql.query(`select * from article where id = ${id};`, (err, res) => {

    if (res.length) {
      console.log("found article: ", res);
      result(null, res);
      return;
    }
    result(null, res); return;


  });
};

article.searchWithout = (title, author, result) => {
  sql.query(`select * from article where title like '%${title}%' and author like '%${author}%' limit 100;`, (err, res) => {

    if (res.length) {
      console.log("found article: ", res);
      result(null, res);
      return;
    }
    result(null, res); return;


  });
};


article.searchWith = (title, author, result) => {
  sql.query(`select * from article where title like '%${title}%' and author like '%${author}%' order by year limit 100;`, (err, res) => {

    if (res.length) {
      console.log("found article: ", res);
      result(null, res);
      return;
    }
    result(null, res); return;


  });
};

article.searchWithPop = (title, author, result) => {
  sql.query(`select * from article where title like '%${title}%' and author like '%${author}%' order by year asc limit 100;`, (err, res) => {

    if (res.length) {
      console.log("found article: ", res);
      result(null, res);
      return;
    }
    result(null, res); return;


  });
};



module.exports = article;