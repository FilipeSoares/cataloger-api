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
        res.send(
            `[
                {
                    "id": 1,
                    "name": "First System"
                    "version": "1.0.0"
                }
             ]`);
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