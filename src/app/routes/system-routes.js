const SystemDAO = require('../dao/SystemDao')
const database = require('../../config/database')
const System = require('../model/System')

module.exports = (app) => {
  app.get('/systems', function (req, res) {
    let dao = new SystemDAO(database)

    dao.list()
      .then(systems => {
        res.send(systems)
      })
      .catch(err => console.log(err))
  })

  app.get('/systems/:id', function (req, res) {
    let dao = new SystemDAO(database)

    dao.fetch(req.params.id)
      .then(system => res.send(system))
      .catch(err => console.log(err))
  })

  app.post('/systems', function (req, res) {
    let dao = new SystemDAO(database)
    let system = new System(req.body.name, req.body.version)
    dao.create(system)
      .then(() => {
        res.location('http://localhost:3000/systems').status(201).end()
      })
      .catch(err => console.log(err))
  })

  app.put('/systems/:id', function (req, res) {
    let dao = new SystemDAO(database)

    dao.update(req.body, req.params.id)
      .then(system => res.send(system))
      .catch(err => console.log(err))
  })

  app.delete('/systems/:id', function (req, res) {
    let dao = new SystemDAO(database)

    dao.remove(req.params.id)
      .then(() => {
        res.status(204).end()
      })
      .catch(err => console.log(err))
  })
}
