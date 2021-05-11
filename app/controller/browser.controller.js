const browser = require("../models/browser.model.js");


exports.insert = (req, res) => {
    browser.insert(req.params.name, (err, data) => {
      if (err) {
        res.status(404).send({
            message: `Not found browser with login ${req.params.name}.`
          });
      } else res.send(data);
    });
  };


  exports.getMax = (req, res) => {
    browser.getMax((err, data) => {
      if (err) {
        res.status(404).send({
            message: `Not found browser with max id.`
          });
      } else res.send(data);
    });
  };