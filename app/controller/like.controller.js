const Liked = require("../models/like.model.js");




exports.countId = (req, res) => {
  Liked.countId(req.params.browser_id, (err, data) => {
      if (err) {
        res.status(404).send({
            message: `Not found like with browser id ${req.params.browser_id}.`
          });
      } else res.send(data);
    });
  };

  exports.countArticleId = (req, res) => {
    Liked.countArticleId(req.params.article_id, (err, data) => {
      if (err) {
        res.status(404).send({
            message: `Not found like with article id ${req.params.article_id}.`
          });
      } else res.send(data);
    });
  };

  exports.getId = (req, res) => {
    Liked.getId(req.params.browser_id, (err, data) => {
      if (err) {
        res.status(404).send({
            message: `Not found like with browser id ${req.params.browser_id}.`
          });
      } else res.send(data);
    });
  };


  exports.check = (req, res) => {
    Liked.check(req.params.browser_id, req.params.article_id,  (err, data) => {
      if (err) {
        res.status(404).send({
            message: `Not found like with browser id ${req.params.browser_id}.`
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
  
    const liked = new Liked({
      browser_id: req.body.browser_id,
      article_id: req.body.article_id,
      article_title: req.body.article_title,
    });
  
    Liked.create(liked, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the periodical."
        });
      else res.send(data);
    });
  };

