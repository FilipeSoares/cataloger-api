const database = require('../../config/database');

module.exports = (app) => {
    
   app.get('/systems', function (req, res) {

        database.findAll( "systems", function(err, data){
            if (err){
                console.log(err);
            }
            res.send(data);
        });
        
    });

    app.post('/systems', function (req, res) {

        console.log(req.body);

        database.insert("systems", req.body);
        
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