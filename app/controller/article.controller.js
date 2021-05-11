const article = require("../models/article.model.js");


  exports.getAll = (req, res) => {
    article.getAll((err, data) => {
      if (err) {
        res.status(404).send({
            message: `Not found articles.`
          });
      } else res.send(data);
    });
  };

  exports.getId = (req, res) => {
    article.getId(req.params.id, (err, data) => {
      if (err) {
        res.status(404).send({
            message: `Not found articles.`
          });
      } else res.send(data);
    });
  };



  exports.searchWithout = (req, res) => {
    article.searchWithout(req.params.title, req.params.author, (err, data) => {
      if (err) {
        res.status(404).send({
            message: `Not found articles.`
          });
      } else res.send(data);
    });
  };



  exports.searchWith = (req, res) => {
    article.searchWith(req.params.title, req.params.author, (err, data) => {
      if (err) {
        res.status(404).send({
            message: `Not found articles.`
          });
      } else res.send(data);
    });
  };

  exports.searchWithPop = (req, res) => {
    article.searchWithPop(req.params.title, req.params.author, (err, data) => {
      if (err) {
        res.status(404).send({
            message: `Not found articles.`
          });
      } else res.send(data);
    });
  };