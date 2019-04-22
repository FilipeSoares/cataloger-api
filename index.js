const app = require('./src/config/server');

app.listen(3000, function () {
    console.log('server running...');
});

app.get('/', function (req, res) {
    res.send(
        `<html>
            <head>
                <title>::Cataloger::</title>
            </head>
            <body>
                <p>Cataloger</p>
            </body>
        </html>`);
});