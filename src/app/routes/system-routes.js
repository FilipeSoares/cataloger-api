const controller = require("../controllers/system-controller");

module.exports = app => {
  const resource = "/systems";

  app
    .route(`${resource}`)
    .get(controller.list)
    .post(controller.create);

  app
    .route(`${resource}/:id`)
    .get(controller.fetch)
    .put(controller.update)
    .delete(controller.delete);
};
