const SystemDAO = require('../dao/system-dao');
const database = require('../../config/database');

module.exports = (app) => {
    
   app.get('/systems', function (req, res) {

        dao = new SystemDAO(database);
        dao.findAll()
            .then(systems => {
                res.send(systems)
            })
            .catch(err => console.log(err));
    });

    app.post('/systems', function(req, res) {

        console.log(req.body);
        dao = new SystemDAO(database);
        dao.insert(req.body)
            .then( () => {
                res.location('http://localhost:3000/systems').status(201).end();
            })
            .catch( err => console.log(err));
        
        
    });

    app.get('/systems/1', function (req, res) {
        res.send(
            `{
                "id": 1,
                "name": "First System"
                "version": "1.0.0"
             }`);
    });

}