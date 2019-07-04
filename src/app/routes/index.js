const baseRoutes = require("./base-routes");
const systemRoutes = require("./system-routes");

module.exports = app => {
  baseRoutes(app);
  systemRoutes(app);
};
