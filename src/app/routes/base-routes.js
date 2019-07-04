module.exports = app => {
  app.get("/", function(req, res) {
    res.send(
      `{ 
          "api": "cataloger-api",
          "version": 1.0.0
        }`
    );
  });

  app.get("/health", function(req, res) {
    res.send(`OK`);
  });
};
