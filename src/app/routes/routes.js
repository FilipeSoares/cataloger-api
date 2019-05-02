const database = require('../../config/database');
const SystemDAO = require('../dao/systemDAO');

module.exports = (app) => {
    
    app.get('/', function (req, res) {

        res.send(
            `{ 
                "api": "cataloger-api",
                "version": 1.0.0
             }`);
    });
    
    app.get('/health', function (req, res) {
        res.send(
            `OK`);
    });

    app.get('/systems', function (req, res) {

        database.findAll( function(err, data){

            if (err){
                console.log(err);
            }
            
            res.send(data);
        });
        
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