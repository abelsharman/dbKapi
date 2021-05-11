const user = require("../models/user.model.js");




exports.register = (req, res) => {
    user.register(req.params.login, req.params.password, (err, data) => {
      if (err) {
        res.status(404).send({
            message: `Not found user with login ${req.params.login}.`
          });
      } else res.send(data);
    });
  };


exports.login = (req, res) => {
    user.login(req.params.login, req.params.password, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found user with first name ${req.params.login}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving user with first name" + req.params.login
          });
        }
      } else res.send(data);
    });
  };
