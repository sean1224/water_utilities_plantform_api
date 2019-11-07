module.exports = app => {
    const models = app.db.models;
    app.route("/imgservice")
      .all((req,res,next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
        res.header("X-Powered-By",' 3.2.1')
        res.header("Content-Type", "application/json;charset=utf-8");
        next();
      })
      .get((req, res) => {
        models.ImgService.findAll()
          .then(result => res.json(result))
          .catch(error => res.status(412).json({msg: error.message}))
      })
      .post((req,res) => {
        models.ImgService.create(req.body)
          .then(result => res.json(result))
          .catch(error => res.status(412).json({msg:error.message}))
      });
    app.route("/imgservice/:id")
      .get((req,res) => {
        models.ImgService.findOne({where:req.params})
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
        models.ImgService.update(req.body,{where: req.params})
          .then(result => res.sendStatus(204))
          .catch(error => res.status(412).json({msg:error.message}))
      })
      .delete((req,res) => {
        models.ImgService.destroy({where:req.params})
          .then(result => res.sendStatus(204))
          .catch(error => res.status(412).json({msg:error.message}))
      })
  };
