const SystemDAO = require("../dao/SystemDao");
const database = require("../../config/database");
const System = require("../model/System");

module.exports = app => {
  const resource = "/systems";
  const dao = new SystemDAO(database);

  app
    .route(`${resource}`)
    .get(function(req, res) {
      dao
        .list()
        .then(systems => {
          res.send(systems);
        })
        .catch(err => console.log(err));
    })
    .post(function(req, res) {
      let system = new System(req.body.name, req.body.version);
      dao
        .create(system)
        .then(() => {
          res.status(201).end();
        })
        .catch(err => console.log(err));
    });

  app
    .route(`${resource}/:id`)
    .get(function(req, res) {
      dao
        .fetch(req.params.id)
        .then(system => res.send(system))
        .catch(err => console.log(err));
    })
    .put(function(req, res) {
      dao
        .update(req.body, req.params.id)
        .then(system => res.send(system))
        .catch(err => console.log(err));
    })
    .delete(function(req, res) {
      dao
        .remove(req.params.id)
        .then(() => {
          res.status(204).end();
        })
        .catch(err => console.log(err));
    });
};
