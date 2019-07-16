const System = require("../model/System");

exports.list = (req, res) => {
  return System.find()
    .then(systems => res.send(systems))
    .catch(err => console.log(err));
};

exports.fetch = (req, res) => {
  return System.findById(req.params.id)
    .then(system => res.send(system))
    .catch(err => console.log(err));
};

exports.create = (req, res) => {
  let system = new System({
    name: req.body.name,
    version: req.body.version,
    context: req.body.context,
    tags: req.body.tags
  });

  system
    .save()
    .then(data => {
      res
        .location(
          `${req.protocol}://${req.get("host")}${req.originalUrl}/${data._id}`
        )
        .status(201)
        .send(data);
    })
    .catch(err => console.log(err));
};

exports.update = (req, res) => {
  System.findOneAndUpdate(
    { _id: req.params.id },
    {
      name: req.body.name,
      version: req.body.version,
      context: req.body.context,
      tags: req.body.tags
    },
    { new: true },
    (err, system) => {
      if (err) {
        if (err.kind === "ObjectId") {
          return res.status(404).send({
            message: "System not found with id " + req.params.id
          });
        }
        return res.status(500).send({
          message: "Error updating system with id " + req.params.id
        });
      }

      if (!system) {
        res.status(404).send({
          message: "System not Found"
        });
      }

      return res.send(system);
    }
  );
};

exports.delete = (req, res) => {
  System.findByIdAndRemove(req.params.id)
    .then(system => {
      if (!system) {
        res.status(404).send({
          message: "System not Found"
        });
      }

      res.status(204).end();
    })
    .catch(err => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "System not found with id " + req.params.id
        });
      }
      return res.status(500).send({
        message: "Error removing system with id " + req.params.id
      });
    });
};
