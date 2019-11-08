module.exports = app => {
  const models = app.db.models;
  app.route("/user")
    .all((req,res,next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
      res.header("X-Powered-By",' 3.2.1')
      res.header("Content-Type", "application/json;charset=utf-8");
      next();
    })
    .get((req,res) => {
      models.User.findAll()
      .then(result => res.json(result))
      .catch(error => res.status(412).json({msg:error.message}))
    })

  app.route("/login")
    .all((req,res,next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
      res.header("X-Powered-By",' 3.2.1')
      res.header("Content-Type", "application/json;charset=utf-8");
      next();
    })
    .get((req,res) => {
      models.User.findAll({
        where: {
          userName: req.query.username,
          userPassword: req.query.password
        }
      })
      .then(result => res.json(result))
      .catch(error => res.status(412).json({msg: error.message}))
    })
    .post((req,res) => {
      models.User.create(req.body)
        .then(result => res.json(result))
        .catch(error => res.status(412).json({msg:error.me}))
    })
  app.route('/login/:id')
    .delete((req,res) => {
      models.User.destroy({where:req.params})
        .then(result => res.sendStatus(204))
        .catch(error => res.status(412).json({msg:error.message}))
    })
};
