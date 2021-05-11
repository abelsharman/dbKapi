const favorite = require("../models/favorite.model.js");




exports.countId = (req, res) => {
    favorite.countId(req.params.user_id, (err, data) => {
      if (err) {
        res.status(404).send({
            message: `Not found favorite with user id ${req.params.user_id}.`
          });
      } else res.send(data);
    });
  };

  exports.countArticle = (req, res) => {
    favorite.countArticle(req.params.article_id, (err, data) => {
      if (err) {
        res.status(404).send({
            message: `Not found favorite with article id ${req.params.article_id}.`
          });
      } else res.send(data);
    });
  };



  exports.getId = (req, res) => {
    favorite.getId(req.params.user_id, (err, data) => {
      if (err) {
        res.status(404).send({
            message: `Not found favorite with user id ${req.params.user_id}.`
          });
      } else res.send(data);
    });
  };

  exports.check = (req, res) => {
    favorite.check(req.params.user_id, req.params.article_id, (err, data) => {
      if (err) {
        res.status(404).send({
            message: `Not found favorite with user id ${req.params.user_id}.`
          });
      } else res.send(data);
    });
  };

  exports.getMax = (req, res) => {
    favorite.getMax((err, data) => {
      if (err) {
        res.status(404).send({
            message: `Not found favorites.`
          });
      } else res.send(data);
    });
  };




  exports.create = (req, res) => {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    const Favorite = new favorite({
      user_id: req.body.user_id,
      article_id: req.body.article_id,
      article_title: req.body.article_title,
    });
  
    favorite.create(Favorite, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the periodical."
        });
      else res.send(data);
    });
  };