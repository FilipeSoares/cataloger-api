const SystemDAO = require('../dao/system-dao');
const database = require('../../config/database');

module.exports = (app) => {

    app.get('/systems', function (req, res) {

        dao = new SystemDAO(database);

        dao.findAll()
                .then(systems => {
                    res.send(systems);
                })
                .catch(err => console.log(err));
        
    });

    app.get('/systems/:id', function (req, res) {
        dao = new SystemDAO(database);
        /* console.log( "Consultando sistema : " + req.params.id );
        dao = new SystemDAO(database);

        dao.findByID( req.params.id )
                .then( system => {
                    console.log(system);
                    res.send(system);
                })
                .catch(err => console.log(err)); */

                dao.findByID( req.params.id );

                res.send(req.params.id);

    });

    app.post('/systems', function (req, res) {

        console.log(req.body);
        dao = new SystemDAO(database);
        dao.insert(req.body)
            .then(() => {
                res.location('http://localhost:3000/systems').status(201).end();
            })
            .catch(err => console.log(err));


    });

}