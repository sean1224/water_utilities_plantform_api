module.exports = app => {
  const models = app.db.models;
  app.route("/application")
    .all((req,res,next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
      res.header("X-Powered-By",' 3.2.1')
      res.header("Content-Type", "application/json;charset=utf-8");
      next();
    })
    .get((req, res) => {
      models.Application.findAll()
        .then(result => res.json(result))
        .catch(error => res.status(412).json({msg: error.message}))
    })
    .post((req,res) => {
      models.Application.create(req.body)
        .then(result => res.json(result))
        .catch(error => res.status(412).json({msg:error.me}))
    });
  app.route("/application/:id")
    .get((req,res) => {
      models.Application.findOne({where:req.params})
        .then(result => {
          if(result){
            res.json(result)
          }
          else{
            res.sendStatus(404);
          }
        })
        .catch(error => {
          res.status(412).json({msg:error.message})
        })
    })
    .put((req,res) => {
      models.Application.update(req.body,{where: req.params})
        .then(result => res.sendStatus(204))
        .catch(error => res.status(412).json({msg:error.message}))
    })
    .delete((req,res) => {
      models.Application.destroy({where:req.params})
        .then(result => res.sendStatus(204))
        .catch(error => res.status(412).json({msg:error.message}))
    })
};
