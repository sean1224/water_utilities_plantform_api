module.exports = app => {
  const models = app.db.models;
  app
    .route("/deviceslist")
    .all((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
      res.header("X-Powered-By", " 3.2.1");
      res.header("Content-Type", "application/json;charset=utf-8");
      next();
    })
    .get((req, res) => {
      models.tensor_devices_list
        .findAll({
          order: ['NAME']
        })
        .then(result => res.json(result))
        .catch(error => res.status(412).json({ msg: error.message }));
    })
    .post((req, res) => {
      models.tensor_devices_list
        .create(req.body)
        .then(result => res.json(result))
        .catch(error => res.status(412).json({ msg: error.me }));
    });
  app
    .route("/deviceslist/:id")
    .all((req, res, next) => {
      delete req.body.id;
      next();
    })
    .get((req, res) => {
      models.tensor_devices_list.findOne({ where: req.params })
        .then(result => {
          if (result) {
            res.json(result);
          } else {
            res.sendStatus(404);
          }
        })
        .catch(error => {
          res.status(412).json({ msg: error.message });
        });
    })
    .put((req, res) => {
      models.tensor_devices_list.update(req.body, { where: req.params })
        .then(result => res.sendStatus(204))
        .catch(error => {
          res.status(412).json({ msg: error.message });
        });
    })
    .delete((req, res) => {
      models.tensor_devices_list.destroy({ where: req.params })
        .then(result => res.sendStatus(204))
        .catch(error => {
          res.status(412).json({ msg: error.message });
        });
    });
};
